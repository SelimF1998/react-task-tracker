import React, { useState } from "react";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import Avatar from "../avatar/Avatar";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import OptionsTooltip from "../options-tooltip/OptionsTooltip";
import { Task } from "../../models/task";
import { useUIStore } from "../../store/uiStore";
import { useTaskStore } from "../../store/taskStore";
import "./TaskCard.scss";
export interface TaskProps {
  taskObject: Task;
}

const TaskCard: React.FC<TaskProps> = ({ taskObject }) => {
  const { deleteTask } = useTaskStore();

  const [optionsClicked, setOptionsClicked] = useState<boolean>(false);
  const openDialog = useUIStore((state) => state.openDialog);
  const setEditClicked = useUIStore((state) => state.setEditClicked);
  const setEditingTask = useUIStore((state) => state.setEditingTask);
  const setIsAddTaskDialogOpen = useUIStore(
    (state) => state.setIsAddTaskDialogOpen
  );

  const onEdit = (task: any) => {
    openDialog();
    setEditClicked(true);
    setEditingTask(task);
    setIsAddTaskDialogOpen(true);
  };

  const onDelete = (taskToDelete: any) => {
    deleteTask(taskToDelete);
  }

  const items = [
    {
      icon: <ModeEditOutlineOutlinedIcon style={{ fontSize: "18px" }} />, // Coffee icon
      name: "Edit",
      onClick: () => onEdit(taskObject),
    },
    {
      icon: <DeleteOutlineOutlinedIcon style={{ fontSize: "18px" }} />,
      name: "Delete",
      onClick: () => onDelete(taskObject)
    },
  ];

  const handleOptions = () => {
    setOptionsClicked(!optionsClicked);
  };

  return (
    <div className="task-card">
      <div className="task-card__header">
        <div className="task-card__header__left">
          <div className="task-card__header__field">
            <div className="task-card__header__field__icon">
              <SpaceDashboardOutlinedIcon
                style={{ fontSize: "16px", color: "#4D38B2" }}
              />
            </div>
            <div className="task-card__header__field__label">
              {" "}
              {taskObject.tag}{" "}
            </div>
          </div>
          <div className="task-card__header__status">
            <div className="task-card__header__status__icon"></div>
            <div className="task-card__header__status__label">
              {" "}
              {taskObject.priority}{" "}
            </div>
          </div>
        </div>
        <div onClick={handleOptions} className="task-card__header__right">
          <MoreVertIcon />
          {optionsClicked && <OptionsTooltip tooltipItem={{ items }} />}
        </div>
      </div>

      <div className="task-card__title"> {taskObject.taskName} </div>

      <div className="task-card__description"> {taskObject.description}</div>

      <div className="task-card__bar"></div>

      <div className="task-card__footer">
        <div className="task-card__footer__left">
          <div className="task-card__footer__left__avatar">
            <Avatar user={taskObject.assignee} />
          </div>
        </div>
        <div className="task-card__footer__right">
          <div className="task-card__footer__right__attachements">
            <div className="task-card__footer__right__attachements__icon">
              <AttachFileOutlinedIcon
                style={{ fontSize: "16px", color: "#9090A1" }}
              />
            </div>
            <div className="task-card__footer__right__attachements__value">
              {taskObject.attachements}
            </div>
          </div>
          <div className="task-card__footer__right__messages">
            <div className="task-card__footer__right__messages__icon">
              <ChatBubbleOutlineOutlinedIcon
                style={{ fontSize: "16px", color: "#9090A1" }}
              />{" "}
            </div>
            <div className="task-card__footer__right__messages__value">
              {taskObject.messages}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
