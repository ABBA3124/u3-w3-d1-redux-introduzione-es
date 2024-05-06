import { useDispatch } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Job = ({ data }) => {
  const dispatch = useDispatch();

  const addToFavorites = () => {
    dispatch({ type: "favorites/add", payload: data.company_name });
  };

  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
        <button className="ms-5" onClick={addToFavorites}>Aggiungi ai preferiti</button>
      </Col>
    </Row>
  );
};

export default Job;
