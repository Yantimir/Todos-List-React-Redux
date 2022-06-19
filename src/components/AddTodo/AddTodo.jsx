import { Button, TextField } from "@mui/material"

export const AddTodo = ({ text, setText, handleInputTextSubmit, handleKeyPress }) => {
    return (
        <div className="todos__input">
            <TextField
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleKeyPress}
                label="Enter a task..."
                variant="outlined"
                fullWidth={true}
                sx={{ mr: "15px" }}
                size="small"
                autoComplete="off"
            />
            <Button
                onClick={handleInputTextSubmit}
                variant="contained">
                Add
            </Button>
        </div>
    )
}
