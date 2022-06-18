import { Button, TextField } from "@mui/material"

export const AddTodo = ({ text, setText, handleInputTextSubmit }) => {
    return (
        <div className="todos__input">
            <TextField
                value={text}
                onChange={(e) => setText(e.target.value)}
                label="Введите задачу..."
                variant="outlined"
                fullWidth={true}
                sx={{ mr: "15px" }}
                size="small"
                autoComplete="off"
                // multiline={true}
            />
            <Button
                onClick={handleInputTextSubmit}
                variant="contained">
                Добавить
            </Button>
        </div>
    )
}
