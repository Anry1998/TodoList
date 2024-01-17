import React from "react";
import { useState } from 'react';
import axios from 'axios'
import {Button, Card, Container, Form, FormControl} from 'react-bootstrap'



function ListForm() {
    
  const [text, setText] = useState('')

  const addTodo = () => {
    setText(text.trim())
    if (text.length){
      axios
        .post('http://localhost:5002/api/posts', {
          content: text
        })
      setText('')
    } 
  }
      
  return(
        <>
           <Container
                className="mt-5"
                style={{width: 550}}
                
            >
                <Card
                    style={{width: 550, padding: 15}}
                >

                <Form>
                    <FormControl
                        placeholder="Введите задачу"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </Form>

                <Button 
                    className="mt-4"
                    variant="outline-success"
                    onClick={addTodo}
                >
                    Добавить
                </Button>
                </Card>
                
           </Container>
        </>
  )
}

export default ListForm