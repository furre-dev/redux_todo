// Redux funktioner (Reducers) som behövs.
// 1. addQuestion
// 2. updateQuestion
// 3. deleteQuestion

// 4. startQuizz ->
// sätt quizzStated = true, showResult = false,
// currentQuestion = 0, score = 0

// 5. answerQuestion ->
// kolla om det var rätt svar då öka score med 1
// kolla om det var sista frågan (Kolla om
//    currentQuestion är == questions.length - 1)
//    då ändra showResult = true.
// Öka currentQuestion med 1.

// Data för frågorna och quizzet:

import { createReduxModule } from "hooks-for-redux";

const initalState = {
    todoItems: [
        {
            title: "Städa rummet",
            id: 1,
            done: false
        },
        {
            title: "Måla väggen",
            id: 2,
            done: false
        },
    ],
};


export const [useTodo, { removeItem, addItem, itemDone }] = createReduxModule(
    "todo",
    initalState,
    {
        removeItem: (state, id) => {
            return {
                ...state,
                todoItems: state.todoItems.filter((item) => id !== item.id)
            };
        },
        addItem: (state, title) => {
            return {
                ...state,
                todoItems: [...state.todoItems, {title: title, id: Math.random().toString()}],
            };
        },
        itemDone: (state, id) => {
            return {
              ...state,
              todoItems: state.todoItems.map((item) => {
                if (item.id === id) {
                  item.done = true;
                }
                return item;
              })
            }
        }
    }
)