"use client";

import { InputEvent, useEffect, useState } from "react";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";
import { TodoType } from "@/types";
import { CheckedState } from "@radix-ui/react-checkbox";
import { useRouter } from 'next/navigation'

const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch('/api/todos')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setTodos(data)
    })
  }, [])

  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">Todo List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full">
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
      {/* LIST */}
      <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
        <div className="flex flex-col gap-4">
          
          {
            todos.map((todo:TodoType) => { 
              return (<TodoItem key={todo.id} id={todo.id} title={todo.title} content={todo.content} complete={todo.complete}  />)
            })
          }
          
          
        </div>
      </ScrollArea>
    </div>
  );
};

const TodoItem = ({id, title, content, complete}:TodoType) => {
  const router = useRouter()
  const handleCheck = (checked: CheckedState) => {
    complete = checked ? true : false

    fetch('/api/todos', { method: 'POST', body: JSON.stringify({ id, title, content, complete })})
    .catch(error => console.log(error))
  }
  return (
    <Card className="p-4">
            <div className="flex items-center gap-4">

              { complete ? <Checkbox onCheckedChange={handleCheck} id={id} checked /> : <Checkbox onCheckedChange={handleCheck} id={id} /> }
              
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                <h3 className="uppercase">{title}</h3>
                <p>{ content }</p>
              </label>
            </div>
          </Card>
  )
}

export default TodoList;
