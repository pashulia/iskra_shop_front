import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import c from "./SubscribeForm.module.css";

export default function FormSubscribe() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={c.wrap}>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Следить за поступлениями
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Подписаться</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Чтобы следить за новыми поступлениями введите в поле адрес своего электронного ящика.
                        Мы будем изредка делать рассылку.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Email"
                        type="email"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Отмена
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Подписаться
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
