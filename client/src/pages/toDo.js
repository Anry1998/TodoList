import React from "react";
import Example from '../pages/modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Container} from 'react-bootstrap'
import Stack from 'react-bootstrap/Stack';
import axios from 'axios'


const ToDo = () => {
    const [data, setData] = React.useState(null)

    React.useEffect(() => {
        axios('http://localhost:5002/api/posts')
            .then(res => setData(res.data))
    }, [data])

    const removeTodo = (id) => {
        axios.delete
        (`http://localhost:5002/api/posts/${id}`)
            .then(res => console.log(res))
    }

    const toggleCheck =  (id) => {
       axios.put
        (`http://localhost:5002/api/posts/check/${id}`)
            .then(res => console.log(res))   
           
    }

    return(
        <div style={{}}>
            <Container 
                className="mt-3"
                style={{width: 750}}
            >
                {data?.map((item, ind) => 
                    
                    <Stack key={item.id} direction="horizontal" gap={3}>
                        <span className="p-2 listId">{ind + 1}</span>
                        <Form.Check className="p-2" type="checkbox" checked={item.completed} onChange={() => toggleCheck(item.id)}/>
                        <span className="p-2 listContent">{item.content}</span>
                        <div className="p-2 ms-auto"><Example  item={item} /></div>
                        
                        <Button className="p-2" variant="danger" onClick={() => removeTodo(item.id)}>Удалить</Button>{' '}
                    </Stack>
                     
                )}
            </Container> 
        </div>
    )
}

export default ToDo