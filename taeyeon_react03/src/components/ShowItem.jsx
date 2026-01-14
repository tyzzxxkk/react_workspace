import { useParams } from "react-router-dom";

export default function ShowItem() {
    return (
        <div>
            상품 {params.id} 번의 상세내용 페이지입니다!
        </div>
    );
}