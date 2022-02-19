import '../DartBoardClickable/DartBoardStyle.css'

const doubleSize = 0.595;
const topSingleSize = 3.155;
const trippleSize = 0.595;
const bottomSingleSize = 4.762;
const bullSingle = 0.536;
const bullDouble = 0.357;

export default function DartBoardGeneration(): JSX.Element {


    let string = '<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="-10.2 -10.2 20.4 20.4">';

    for(let i = 0; i < 20; i++) {
        string += generateDouble(i);
        string += generateTopSingle(i);
        string += generateTripple(i);
        string += generateBottomSingle(i);
    }
    string += generateBullsEye();


    string += '</svg>';
    return <div dangerouslySetInnerHTML={{__html: string}} />;
}

function generateDouble(i: number) {
        const currentAlpha = ((i * 18) + 180) % 360;

        const leftLine = currentAlpha - 9;
        const rightLine = currentAlpha + 9;

        const b_dist = bullDouble + bullSingle + bottomSingleSize + trippleSize + topSingleSize;
        const t_dist = bullDouble + bullSingle + bottomSingleSize + trippleSize + topSingleSize + doubleSize;

        const b_l_point = getPoint(leftLine, b_dist);
        const b_r_point = getPoint(rightLine, b_dist);
        const t_l_point = getPoint(leftLine, t_dist);
        const t_r_point = getPoint(rightLine, t_dist);

        let path = "M" + s(b_l_point);
        path += " A " + b_dist + " " + b_dist + " 0 0 0 " + s(b_r_point);
        path += " L " + s(t_r_point);
        path += " A " + t_dist + " " + t_dist + " 0 0 1 " + s(t_l_point);
        path += " Z ";

        const className = (i % 2 == 0) ? 'red-field' : 'green-field'

        return '<path d="' + path + '" class="' + className + '" />'

}

function generateTopSingle(i: number) {
        const currentAlpha = ((i * 18) + 180) % 360;

        const leftLine = currentAlpha - 9;
        const rightLine = currentAlpha + 9;

        const b_dist = bullDouble + bullSingle + bottomSingleSize + trippleSize;
        const t_dist = bullDouble + bullSingle + bottomSingleSize + trippleSize + topSingleSize;

        const b_l_point = getPoint(leftLine, b_dist);
        const b_r_point = getPoint(rightLine, b_dist);
        const t_l_point = getPoint(leftLine, t_dist);
        const t_r_point = getPoint(rightLine, t_dist);

        let path = "M" + s(b_l_point);
        path += " A " + b_dist + " " + b_dist + " 0 0 0 " + s(b_r_point);
        path += " L " + s(t_r_point);
        path += " A " + t_dist + " " + t_dist + " 0 0 1 " + s(t_l_point);
        path += " Z ";

        const className = (i % 2 == 0) ? 'black-field' : 'yellow-field'

        return '<path d="' + path + '" class="' + className + '" />'
}

function generateTripple(i: number) {
    const currentAlpha = ((i * 18) + 180) % 360;

    const leftLine = currentAlpha - 9;
    const rightLine = currentAlpha + 9;

    const b_dist = bullDouble + bullSingle + bottomSingleSize;
    const t_dist = bullDouble + bullSingle + bottomSingleSize + trippleSize;

    const b_l_point = getPoint(leftLine, b_dist);
    const b_r_point = getPoint(rightLine, b_dist);
    const t_l_point = getPoint(leftLine, t_dist);
    const t_r_point = getPoint(rightLine, t_dist);

    let path = "M" + s(b_l_point);
    path += " A " + b_dist + " " + b_dist + " 0 0 0 " + s(b_r_point);
    path += " L " + s(t_r_point);
    path += " A " + t_dist + " " + t_dist + " 0 0 1 " + s(t_l_point);
    path += " Z ";

    const className = (i % 2 == 0) ? 'red-field' : 'green-field'

    return '<path d="' + path + '" class="' + className + '" />'

}

function generateBottomSingle(i: number) {
    const currentAlpha = ((i * 18) + 180) % 360;

    const leftLine = currentAlpha - 9;
    const rightLine = currentAlpha + 9;

    const b_dist = bullDouble + bullSingle;
    const t_dist = bullDouble + bullSingle + bottomSingleSize;

    const b_l_point = getPoint(leftLine, b_dist);
    const b_r_point = getPoint(rightLine, b_dist);
    const t_l_point = getPoint(leftLine, t_dist);
    const t_r_point = getPoint(rightLine, t_dist);

    let path = "M" + s(b_l_point);
    path += " A " + b_dist + " " + b_dist + " 0 0 0 " + s(b_r_point);
    path += " L " + s(t_r_point);
    path += " A " + t_dist + " " + t_dist + " 0 0 1 " + s(t_l_point);
    path += " Z ";

    const className = (i % 2 == 0) ? 'black-field' : 'yellow-field'

    return '<path d="' + path + '" class="' + className + '" />'
}

function generateBullsEye() {
    const greenRadius = bullDouble + bullSingle;
    return '<circle cx="0" cy="0" r="' + greenRadius + '" class="green-field"  />' +
        '<circle cx="0" cy="0" r="' + bullDouble + '" class="red-field" />'
}

function s(p: {x:number, y:number}): string {
    let x:string = p.x.toString().substring(0, 5);
    let y:string = p.y.toString().substring(0, 5);
    return x + "," + y;
}

function getPoint(alpha: number, distance: number) {
    return {
        x: Math.sin(alpha * 0.0174533) * distance,
        y: Math.cos(alpha * 0.0174533) * distance
    }
}