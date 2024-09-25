
import ItemList from './ItemList';
const Content = ({ items, setItems, handleCheck, handleDelete }) => {
    return (
        <main>
            {!items ? 'List Empty' :
                <ItemList items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
            }
        </main>
    )
}
export default Content;