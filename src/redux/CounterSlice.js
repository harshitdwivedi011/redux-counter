import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        post: {
            title: '',
            author: '',
            content: '',
            likes: 0
        },
        count: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 1
            document.querySelector('.decrement').classList.remove('disabled');
        },
        decrement: (state) => {
            if (state.value > 0)
                state.value -= 1
            else if (state.value <= 0)
                document.querySelector('.decrement').classList.add('disabled');
        },
        reset: (state) => {
            state.value = 0
        },
        incrementByAmount: (state, amount) => {
            state.value += parseInt(amount.payload)
        },
        savePost: (state, actions) => {
            const { title, author, content } = actions.payload;
            state.post.title = title
            state.post.author = author
            state.post.content = content
        },
        incrementLike: (state) => {
            state.count += 1
        }
    }
})

export const { increment, decrement, reset, incrementByAmount, savePost, incrementLike } = counterSlice.actions;
export default counterSlice.reducer;