export default function DayCell ({day, type, isAvailable =1, isSelected, onClickFn}) {
    let cell = "";

    if (type==="radio" && isAvailable){
        cell =  <div className={"day radio"+(isSelected?" selected":"")} onClick={onClickFn}>{day.getDate()}</div>
    } else if (type==="checkbox"||type==="") {
        cell =  <div className={"day check"+(isSelected?" selected":"")} onClick={onClickFn}>{day.getDate()}</div>
    } else {
        cell =  <div className="day">{day.getDate()}</div>
    }

    return cell
}
