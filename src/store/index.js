import { v4 as uuid } from 'uuid'
import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialNoteState = [
  {
    id: uuid(),
    title: 'Lorem ipsum',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
]

const notesSlice = createSlice({
  name: 'notes',
  initialState: initialNoteState,
  reducers: {
    addNote(state, action) {
      state.push({
        id: uuid(),
        ...action.payload,
      })
    },
    removeNote(state, action) {
      return state.filter((note) => note.id !== action.payload.id)
    },
  },
})
export const { addNote, removeNote } = notesSlice.actions
export const store = configureStore({
  reducer: { notes: notesSlice.reducer },
})
// export const store = createStore(null, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
