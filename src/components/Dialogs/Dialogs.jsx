import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.gialog + ' ' + s.active}>
                    Anton
                </div>
                <div className={s.gialog}>
                    Dima
                </div>
                <div className={s.gialog}>
                    Anna
                </div>
                <div className={s.gialog}>
                    Sacha
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hi.
                </div>
                <div className={s.message}>
                    dfibgdf
                </div>
                <div className={s.message}>
                    spojfsvsm
                </div>

            </div>
        </div>
    )
}
export default Dialogs;