import {useSelector} from "react-redux";

export const AnswersPage = () => {
    const answers = useSelector((state) => state.answers.items);

    return (
        <div>Exact question page</div>
    )
}