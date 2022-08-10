import Card from "../UI/Card";

const List = (props) => {
    return (
        <Card>
            <ul>
                {props.HasList.map(
                    listUp => <li>{listUp.main}</li>
                )}
            </ul>
        </Card>
    )
};

export default List;