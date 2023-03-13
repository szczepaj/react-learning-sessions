import {createAction, createReducer, createSlice} from "@reduxjs/toolkit";
import {
    addTaskAction,
    toggleCompletedAction
} from "../../../../../Desktop/projects/goit/src/components/lesson12/todo-app/redux/tasks/tasks.actions";
import {
    deleteSelectedTask,
    fetchTasks, toggleSelectedTask
} from "../../../../../Desktop/projects/goit/src/components/lesson13/todo-app/redux/tasks/tasks.thunk";


import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        setNameFilterAction(state, action) {

            // Zapis nr 1 mutowalny
            // state = {
            //  value: action.payload
            // }

            // Zapis nr 2 niemutowalny
            return { value: action.payload }

            // return (state = action.payload);
        },
    },
});

export const { setNameFilterAction } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

const deleteTaskActionStandard = id => {
    return {
        type: 'tasks/deleteTask',
        payload: { id }
    }
}

export const deleteTaskAction = createAction('tasks/deleteTask', id => ({
    payload: { id }
}))

const tasksReducerStandard = (state, action) => {
    switch(action.type) {
        case deleteTaskAction.type: {
            const { id } = action.payload
            return  state.filter(task => task.id !== id)
        }
    }
}

export const tasksReducerToolkit = createReducer(initialTasksState, {
    [deleteTaskAction.type]: (state, action) => {
        const { id } = action.payload
        return  state.filter(task => task.id !== id)
    },
})

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: initialTasksState,
    reducers: {
        deleteTaskAction: {
            reducer(state, action) {
                const id = action.payload
                return state.filter(task => task.id !== id)
            },
            prepare(id) { // domyslny sposób generowania akcji przez redux toolkita w slice
                return {
                    payload: id
                }
            }

        }
    },
    extraReducers: {
        ['tasks/fetchTasks/pending']: () => {},
        [deleteSelectedTask.pending]: () => {},
        [toggleSelectedTask.pending]: () => {}
    }
})



const Component = () => {
    const [images, setImages] = useState([])
    const isFetchingImages = useRef(false)

    const handleImagesRequest = async (searchQuery, pageNr) => {
        if (!searchQuery) return;
        setIsLoading(true);
        try {
            const fetchData = await fetchImagesWithQuery(searchQuery, pageNr);
            const { newImages } = fetchData;
            const { totalHits } = fetchData;
            if (pageNr > 1) {
                setImages([
                    ...images,
                    ...newImages
                ])
                console.log(images)
                // setImages(e => e.concat(newImages));
            } else {
                setImages(newImages);
            }
            setTotalHits(totalHits);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
            isFetchingImages.current = false
        }
    };

    useEffect(() => {
        if(isFetchingImages.current) return

        isFetchingImages.current = true
        handleImagesRequest(searchQuery, pageNr);
    }, [searchQuery, pageNr]);

    const addImages = (e) => { setImages([...images, e.target.files[0]])}

    return ()
}

const ComponentWithDynamicallyEnabledNavLink = () => {
    const [isHomeNavigationEnabled, setIsHomeNavigationEnabled] = useState(false)

    return (
        <div>
            <Link to={'/'} style={{pointerEvents: isHomeNavigationEnabled}}>Navigate me to home</Link>
        </div>
    )
}

// hooki
// 1. useState - zarządzanie w sposób atomowy wartościami w stanie komponentu
const [value, setValue] = useState(null) // w nawiasie wartosc domyslna/startowa
// komponent reaguje na zmiane wartosci stanu, przerenderowuje sie po zmianie stanu
// stan aktualizuje sie w sposób asynchroniczny

// 2. useEffect / useLayoutEffect - odpowiednik metod lifecycle z react class components.
// Przy pustej tablicy deps - componentDidMount
// Przy wartosciach  w tablicy deps, useEffect jest wykonywany po kazdorazowej zmianie wartosci z tablicy
// useLayoutEffect - jak componentDidMount, wywoluje sie raz po pełnym wyrenderowaniu layoutu
useEffect(() => {

}, [])

// 3. useCallback / useMemo - memoizuje funkcję lub output funkcji
const memoizedValue = useMemo(() => value, []) // zmemoizowana wartosc value, zmieni sie tylko po zmianie wartosci w deps array
const memoizedFn = useCallback(() => fn(), []) // zmemoizowana funkcja, zmieni sie tylko po zmianie wartosci w deps array

// 4. useRef - odnosnik do referencji reactowej, zmienia sie synchronicznie, niezależna od cyklu życia komponentu, nie wpływa na renderowanie, mutowalna
const value = useRef(false)
value.current // odniesienie sie do wartosci za pomoca gettera
value.current = true // zmiana wartosci w sposob mutowalny

// 5. useContext - odnosnik do contextu
const contextValue = useContext(ExampleContext) // jako argument przyjmuje context, do ktorego sie odnosimy

// Redux hook
// 1. useSelector - przyjmuje callback, pobiera wartosc ze stanu reduxowego
const someValue = useSelector(state => state.nestedState.value)

// 2. useDispatch - zwraca funkcjędispatchującą akcje reduxowe do stanu
const dispatch = useDispatch()

dispatch(someAction())

// Router hooks
// 1. useNavigate - zwraca funkcję pozwalająca na nawigacje programatyczną
const navigate = useNavigate()

navigate('path')
// 2. useParams - zwraca obiekt params z URL
// url - localhost:3000/path/1234 -> path/:id
const { id } = useParams()
// 3. useLocation - zwraca obiekt location
const locationObject = useLocation() // odpowiednik window.location
// 4. useSearchParams - zwraca search params z url
// url - localhost:3000/path?id=1234
const { id } = useSearchParams()
