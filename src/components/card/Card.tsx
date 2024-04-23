import { PropsWithChildren } from 'react';
import { CardPropsIntf } from "../../model/CardPropsIntf";
import "./Card.css";

export const Card = (props: PropsWithChildren) => {
  
  return (
    <div className="card">
      {props.children}  
    </div>
  );
}