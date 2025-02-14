import TypeWriter from 'typewriter-effect'

const TypeWritingEffect = () => {
  return (
    <div>
        <TypeWriter
        options={{
           strings:[
            "safe",
            "protected",
            "secured"
           ],
           autoStart:true,
           loop:true,
           deleteSpeed:50
        }}/>
    </div>
  )
}

export default TypeWritingEffect