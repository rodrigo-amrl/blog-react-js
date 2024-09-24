
import ItemList from './ItemList';
const Content = ({ items, setItems, handleCheck, handleDelete }) => {
    return (
        <main>
            <ItemList items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
        </main>
    )
}
export default Content;