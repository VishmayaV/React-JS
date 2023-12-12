
import PropsFunction from "./Day4/PropsFunction.js";
import PropsClass from "./Day4/PropsClass.js";
import PropsFunctionalEx1 from "./Day4/PropsFunctionalEx1.js";
import ArrowProps from "./Day4/ArrowProps.js";
import StateClass from "./Day4/StateClass.js";
import StateFunction from "./Day4/StateFunction.js";
import StateHoldObject from "./Day4/StateHoldObject.js";
import DynamicRendering from "./Day4/DynamicRendering.js";

export default function App()
{

return(
  <div>
    <PropsFunction name="Vish" college="SKCT"></PropsFunction>
    <PropsClass college="SKCT"></PropsClass>
    <PropsFunctionalEx1 college="SKCT"place ="cbe"></PropsFunctionalEx1>
    <ArrowProps place="cbe"></ArrowProps>
    <StateClass color="Yellow" price="121"></StateClass>
    <StateFunction></StateFunction>
    <StateHoldObject></StateHoldObject>
    <DynamicRendering></DynamicRendering>

  </div>
)
}
