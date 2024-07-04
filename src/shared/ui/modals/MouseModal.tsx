import {TextModule} from "@src/shared/scss";
import ModalStyle from "@src/shared/ui/modals/Modal.module.scss"
import {FC, ReactElement, SVGProps, useEffect, useState} from "react";
import {useClass} from "@src/shared/hooks";

interface ModalProps {
  icon?: ReactElement<SVGProps<SVGElement>>
  content: string
  isOpen: boolean
}

export const MouseModal: FC<ModalProps> = ({icon, content, isOpen}) => {
  const [mousePos, setMousePos] = useState({x: 100, y: 0});

  useEffect(() => {
    const handleMouseMove = (event:MouseEvent) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {window.removeEventListener('mousemove', handleMouseMove);};
  }, []);

  return (
    <div className={useClass([ModalStyle.CopyNumberModal, TextModule.span__light, isOpen ? ModalStyle['open'] : ModalStyle['closed']])} style={{left: mousePos.x, top: mousePos.y}}>
      {icon}
      {content}
    </div>
  );
};