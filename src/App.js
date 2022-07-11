import React,{useState} from "react"
import "./App.css";

function App() {
  let [playerHealth, setPlayerHealth] = useState(100);
  let [monsterHealth, setMonsterHealth] = useState(120);
  let [moves,setMoves] = useState(["no moves yet"]);
  console.log(moves)
  let attackHandler = () => {
    let randomNumber = Math.floor(Math.random()*10)+1;
    let damagePercentage = (randomNumber);
    console.log(damagePercentage);
    let newHealth = (monsterHealth*(100-damagePercentage))/100;
    setMonsterHealth(newHealth);
    setMoves(moves=[...moves,`Player gave ${damagePercentage}% damage`])
    monsterAttack();
  }
  let specialAttackHandler = (playerHealth) => {
    if(playerHealth<90){
      return;
    }
    let randomNumber = Math.floor(Math.random()*10)+1;
    let damagePercentage = (randomNumber);
    console.log(damagePercentage);
    let newHealth = (monsterHealth*(100-damagePercentage))/100;
    setMonsterHealth(newHealth);
    setMoves(moves=[...moves,`Player gave ${damagePercentage}% damage`])          

    monsterAttack();
  } 
  let healHandler = () =>{
    let newHealth = playerHealth + playerHealth*0.1;
    setPlayerHealth(newHealth);
    setMoves(moves=[...moves,`Player healed by 10%`])          

    monsterAttack();
  } 

  let monsterAttack = ()=>{
    setTimeout(()=>{
      let randomNumber = Math.floor(Math.random()*20)+1;
      let damagePercentage = (randomNumber);
      let newHealth = (playerHealth*(100-damagePercentage))/100;
      setPlayerHealth(newHealth);
      setMoves(moves=[...moves,`Monster gave ${damagePercentage}% damage`])          
    },1000)
  }
  return (
    <>
      <div className="box1">
        <div className="box2">
          <div className="healthBox">
            <div className="playerZone">
              <div className="username">Player1</div>
              <div className="userhealth">{playerHealth}</div>
            </div>
            <div className="monsterZone">
              <div className="username">Monster</div>
              <div className="userhealth">{monsterHealth}</div>
            </div>
          </div>
          <div className="moveBox">
            <button onClick={()=>{
              attackHandler();
            }}>Attack</button>
            <button onClick={()=>{
              specialAttackHandler(playerHealth);
            }}>Special Attack</button>
            <button onClick={()=>{
              healHandler();
            }}>Heal</button>
            <button onClick={() => window.location.reload()}>Give Up</button>
          </div>
          <div className="recordBox"><ol>
            {moves.map((item,index)=>{
              return(<li>{item}</li>)
            })}
            
            </ol></div>
        </div>
      </div>
    </>
  );
}

export default App;
