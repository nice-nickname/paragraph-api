import {Paragraphs} from "../../core/services/exercises/TextService";

interface SplitParams {
    maxSymbolsCount: number,
    paragraphDelimits: string[],
    orderStartingFrom: number
}


/*
Функция, которая будет переносить лишние предложения в другие

 splitBySentence:
- false, когда нужно убрать остатки предложений, которые начались в одной строке, а кончились в другой
- true, если нужно делить предложения только по разделителям
 Предложения в строках при этом не разорваны
*/
function moveOddSentencesToNext(strings: string[], params: SplitParams, i: number, splitBySentences = false) {
    if (strings[i].length == 0) {
        return;
    }

    let delimPosition = -1
    // Ищем ближайший к концу разделитель
    for (let j = 0; j < params.paragraphDelimits.length; j++) {
        let delimiter = params.paragraphDelimits[j]
        let currentDelimPosition: number

        if (splitBySentences) {
            currentDelimPosition = strings[i].lastIndexOf(delimiter, strings[i].length - 2)
        }
        else {
            currentDelimPosition = strings[i].lastIndexOf(delimiter)
        }


        if (currentDelimPosition > delimPosition) {
            delimPosition = currentDelimPosition
        }
    }

    // Если после разделителя есть пробел
    // то есть это не конец строки
    if (strings[i][delimPosition + 1] == ' ') {
        delimPosition += 1
    }

    // Выделяем подстроку и переносим в следующий элемент
    if (strings[i+1]) {
        strings[i + 1] = strings[i].substr(delimPosition + 1) + strings[i + 1]
    }
    else {
        strings.push(strings[i].substr(delimPosition + 1))
    }

    // Убираем из текущей строки выделенную
    strings[i] = strings[i].substring(0, delimPosition)
}

export default function splitTextToParagraphs(text: string, params: SplitParams): Paragraphs[]  {
    let strings: string[] = []

    // Магия, без которой теряется последний символ
    text += ' '


    let notSplitted = true
    let position = 0
    // Сначала разделяем текст по количеству макс. кол-ву символов в строке
    while (notSplitted) {
        let len = params.maxSymbolsCount

        // Если длина оставшегося текста меньше макс. длины строки
        if (len > text.length - position) {
            len = text.length - position
            notSplitted = false
        }

        strings.push(text.substr(position, len))
        position += len
    }

    let  length = strings.length
    // Начинаем убирать из каждой строки
    // остатки предложений, чтобы не было разрывов и неправильных переходов между строками.
    // Идем от начала до конца, из начала лишние части будут переходить в конечные строки
    for (let i = 0; i < length; i++) {
        moveOddSentencesToNext(strings, params, i)
    }

    // После всего этого, могут остаться слишком большие строки
    // Чтобы убрать их, будем постепенно лишние предложения перемещать в последние строки
    length = strings.length
    for (let i = 0; i < length; i++) {
        while (strings[i].length > params.maxSymbolsCount) {
            moveOddSentencesToNext(strings, params, i, true)
        }
    }

    // Убираем пустые элементы
    strings = strings.filter(v => {
        return v.length != 0;
    })

    let order = params.orderStartingFrom - 1
    return strings.map(v => {
        order++
        return {
            content: v,
            order: order
        }
    })
}
