function CVRow(props) {
  return (
    <tr height={props.isDivider ? "100rem" : "200rem"}>
      <td style={{ alignItems: "right" }}>
        <p style={{ fontSize: "18px", fontWeight: "bold" }}>
          {" "}
          {props.jobTitle}
        </p>
        <p>{props.companyName}</p>
        <p>{props.tenure}</p>
      </td>
      <td className="CV-table-text" colSpan={props.isEducationSection ? 2 : 1}>
        <div
          className="CV-column"
          style={
            props.isDivider ? { fontWeight: "bold", fontSize: "30px" } : {}
          }
        >
          <p>{props.isDivider ? props.dividerTitle : props.jobDescription} </p>
        </div>
      </td>
      <td className="CV-table-text">{props.technologies} </td>
    </tr>
  );
}

export default CVRow;
