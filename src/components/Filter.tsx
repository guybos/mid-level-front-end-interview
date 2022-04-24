import {Form} from 'react-bootstrap';

type FilterProps = {
    value: string,
    onChange: (value: string) => void,
    placeHolder: string
}

function Filter({
    value,
    onChange,
    placeHolder
}: FilterProps) {
    return (
        <div>
            <Form.Control
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeHolder}
            />
        </div>
    );
}

export default Filter;