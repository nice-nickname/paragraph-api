import Exercises from "./exercises/Exercises";
import ExerciseContent from "./exercises/ExerciseContent";

Exercises.hasMany(ExerciseContent, {
    foreignKey: 'content_id'
})

export {
    Exercises,
    ExerciseContent
}