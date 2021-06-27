import Exercises from "./exercises/Exercises";
import ExerciseContent from "./exercises/ExerciseContent";

Exercises.hasMany(ExerciseContent, {
    foreignKey: 'exercise_id'
})

export {
    Exercises,
    ExerciseContent
}