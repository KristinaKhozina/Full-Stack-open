const Header = ({text}) => {
    return (
        <h2>{text}</h2>
    )
}

const Part = ({part}) => {
    return(
        <p>{part.name} {part.exercises}</p>
    )
}

const Content = ({parts}) => {
    const total = parts.reduce((sum, part) => sum += part.exercises, 0)
    
    return (
        <>
            {parts.map(part =>
                <Part key={part.id} part={part} />
            )}
            <p><b>Total of {total} exercises</b></p>
        </>
    )
}

const Course = ({course}) => {
    return (
        <>
            <Header text={course.name} />
            <Content parts={course.parts} />
        </>
    )
}

export default Course