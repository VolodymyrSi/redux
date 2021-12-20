import {useSelector} from "react-redux";

export const AllQuestions = () => {
    const questions = useSelector((state) => state.questions.items);
    return (
        <div>All questions page</div>
    )
}