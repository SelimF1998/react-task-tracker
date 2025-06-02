import react, { useState, useEffect } from "react";
import Modal from "../modal/Modal";
import Input from "../input/Input";
import InputDropdown from "../input-dropdown/InputDropdown";
import Textarea from "../textarea/Textarea";
import { User } from "../avatar/Avatar.interface";
import { Tag } from "../../models/task";
import { Task } from "../../models/task";
import Avatar from "../avatar/Avatar";
import { useTaskStore } from "../../store/taskStore";
import { useUIStore } from "../../store/uiStore";
import "./AddTaskFormDialog.scss";
export interface TaskFormData {
  title?: string;
  description?: string;
  assignee?: User;
  priority?: "Low" | "Medium" | "High";
  status?: "Todo" | "In Progress" | "On Approval" | "Done";
  tag?: Tag;
  attachements?: number;
  messages?: number;
}

const AddTaskFormDialog = ({}) => {
  const { addTask, updateTask } = useTaskStore();
  const editClicked = useUIStore((state) => state.editClicked);
  const editingTask = useUIStore((state) => state.editingTask);
  const isAddTaskDialogOpen = useUIStore((state) => state.isAddTaskDialogOpen);
  const setEditClicked = useUIStore((state) => state.setEditClicked);
  const setEditingTask = useUIStore((state) => state.setEditingTask);
  const setIsAddTaskDialogOpen = useUIStore(
    (state) => state.setIsAddTaskDialogOpen
  );
  const closeDialog = useUIStore((state) => state.closeDialog);
  const [errors, setErrors] = useState<
    Partial<Record<keyof TaskFormData, string>>
  >({});

  const [taskForm, setTaskForm] = useState<TaskFormData>({
    title: "",
    description: "",
    assignee: {
      id: 1,
      name: "",
      email: "",
    },
    priority: "Medium",
    status: "Todo",
    tag: "",
    attachements: 2,
    messages: 3,
  });

  useEffect(() => {
    console.log("3asba");
  }, []);

  useEffect(() => {
    console.log("Editing Task:", editingTask);
    console.log("Edit clicked:", editClicked);

    if (editClicked) {
      setTaskForm({
        title: editingTask?.taskName,
        description: editingTask?.description,
        assignee: {
          id: editingTask?.assignee?.id,
          name: editingTask?.assignee?.name,
          email: editingTask?.assignee?.email,
        },
        priority: editingTask?.priority,
        status: editingTask?.status,
        tag: editingTask?.tag,
        attachements: 2,
        messages: 3,
      });
    }
  }, [isAddTaskDialogOpen]);

  const users = [
    {
      id: 1,
      name: "Emily Johnson",
      email: "emily.johnson@example.com",
      profileImg: "",
    },
    {
      id: 2,
      name: "Michael Smith",
      email: "michael.smith@example.com",
      profileImg: "",
    },
    {
      id: 3,
      name: "Olivia Brown",
      email: "olivia.brown@example.com",
      profileImg: "",
    },
    {
      id: 4,
      name: "William Davis",
      email: "william.davis@example.com",
      profileImg: "",
    },
    {
      id: 5,
      name: "Sophia Wilson",
      email: "sophia.wilson@example.com",
      profileImg: "",
    },
    {
      id: 6,
      name: "James Miller",
      email: "james.miller@example.com",
      profileImg: "",
    },
    {
      id: 7,
      name: "Ava Taylor",
      email: "ava.taylor@example.com",
      profileImg: "",
    },
    {
      id: 8,
      name: "Benjamin Anderson",
      email: "benjamin.anderson@example.com",
      profileImg: "",
    },
    {
      id: 9,
      name: "Mia Thomas",
      email: "mia.thomas@example.com",
      profileImg: "",
    },
    {
      id: 10,
      name: "Daniel Martinez",
      email: "daniel.martinez@example.com",
      profileImg: "",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    if (name === "assignee") {
      setTaskForm((prev) => ({
        ...prev,
        assignee: {
          ...prev.assignee,
          name: value,
        },
      }));
    } else {
      setTaskForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Partial<Record<keyof TaskFormData, string>> = {};

    if (!taskForm.title?.trim()) newErrors.title = "Title is required";
    if (!taskForm.assignee?.name?.trim())
      newErrors.assignee = "Assignee is required";
    if (!taskForm.tag?.trim()) newErrors.tag = "Tag is required";
    if (!taskForm.status?.trim()) newErrors.status = "Status is required";
    if (!taskForm.priority?.trim()) newErrors.priority = "Priority is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    if (editClicked) {
      const updatedTask: Task = {
        ...editingTask,
        tag: taskForm.tag,
        priority: taskForm.priority!,
        status: taskForm.status!,
        taskName: taskForm.title!,
        description: taskForm.description!,
        assignee: {
          id: taskForm.assignee?.id || 0,
          name: taskForm.assignee?.name || "",
          email: taskForm.assignee?.email || "",
          profileImg: taskForm.assignee?.profileImg || "",
        },
        attachements: taskForm.attachements || 2,
        messages: taskForm.messages || 3,
      };

      updateTask(updatedTask);
      setEditClicked(false);
      setEditingTask({
        id: 0,
        tag: "",
        priority: "Low",
        status: "Todo",
        taskName: "",
        description: "",
        assignee: {
          id: 0,
          name: "",
          email: "",
          profileImg: "",
        },
        attachements: 0,
        messages: 0,
      });
    } else {
      const newTask: Task = {
        id: Math.floor(Math.random() * 1000),
        tag: taskForm.tag!,
        priority: taskForm.priority!,
        status: taskForm.status!,
        taskName: taskForm.title!,
        description: taskForm.description!,
        assignee: {
          id: Date.now(),
          name: taskForm.assignee?.name || "",
          email: taskForm.assignee?.email || "",
          profileImg: taskForm.assignee?.profileImg || "",
        },
        attachements: taskForm.attachements || 2,
        messages: taskForm.messages || 3,
      };

      addTask(newTask);
    }

    setIsAddTaskDialogOpen(false);

    setTaskForm({
      title: "",
      description: "",
      assignee: { id: 0, name: "", email: "" },
      priority: "Medium",
      status: "Todo",
      tag: "",
      attachements: 2,
      messages: 3,
    });
  };

  const usersItems = {
    id: 3,
    items: users.map((user) => ({
      name: user.name,
      icon: <Avatar user={user} />,
      onClick: () => handleUser(user),
    })),
  };

  const tagsItems = {
    id: 1,
    items: [
      {
        name: "Frontend",
        onClick: () => handleTag("Frontend"),
      },
      {
        name: "Backend",
        onClick: () => handleTag("Backend"),
      },
      {
        name: "Bug",
        onClick: () => handleTag("Bug"),
      },
      {
        name: "Task",
        onClick: () => handleTag("Task"),
      },
      {
        name: "UI",
        onClick: () => handleTag("UI"),
      },
      {
        name: "Enhancement",
        onClick: () => handleTag("Enhancement"),
      },
      {
        name: "Research",
        onClick: () => handleTag("Research"),
      },
    ],
  };

  const priorityItems = {
    id: 1,
    items: [
      {
        name: "Low",
        onClick: () => handlePriority("Low"),
      },
      {
        name: "Medium",
        onClick: () => handlePriority("Medium"),
      },
      {
        name: "High",
        onClick: () => handlePriority("High"),
      },
    ],
  };

  // 1. Define limited status items for new tasks
  const limitedStatusItems = {
    id: 1,
    items: [
      {
        name: "Todo",
        onClick: () => handleStatus("Todo"),
      },
    ],
  };

  // 2. Full status items for editing existing tasks
  const fullStatusItems = {
    id: 1,
    items: [
      {
        name: "Todo",
        onClick: () => handleStatus("Todo"),
      },
      {
        name: "In Progress",
        onClick: () => handleStatus("In Progress"),
      },
      {
        name: "On Approval",
        onClick: () => handleStatus("On Approval"),
      },
      {
        name: "Done",
        onClick: () => handleStatus("Done"),
      },
    ],
  };

  const handleTag = (tag: Tag) => {
    // do something with selected tag, e.g. set state
    setTaskForm((prev) => ({
      ...prev,
      tag: tag, // this is already typed correctly
    }));
  };

  const handlePriority = (priority: "Low" | "Medium" | "High") => {
    console.log("Priority:", priority);

    setTaskForm((prev) => ({
      ...prev,
      priority: priority, // this is already typed correctly
    }));
  };

  const handleStatus = (
    status: "Todo" | "In Progress" | "On Approval" | "Done"
  ) => {
    setTaskForm((prev) => ({
      ...prev,
      status: status, // this is already typed correctly
    }));
  };

  const handleUser = (user: User) => {
    setTaskForm((prev) => ({
      ...prev,
      assignee: user, // this is already typed correctly
    }));
  };

  return (
    <Modal
      modalTitle={editClicked ? "Edit task" : "Create new task"}
      isOpen={isAddTaskDialogOpen}
      onClose={closeDialog}
      submitButtonLabel={editClicked ? "Save Task" : "Create Task"}
      onSubmitAction={handleSubmit}
      onCancelAction={closeDialog}
    >
      <form>
        <div className="form-control">
          <div className="form-control__fields">
            <div className="form-control__field">
              <div className="form-control__field__label">Task Name</div>
              <div className="form-control__field__input">
                <Input
                  id="title"
                  name="title"
                  placeholder="Enter task name"
                  value={taskForm.title}
                  onChange={handleChange}
                  type="text"
                />
              </div>
            </div>
            <div className="form-control__field">
              <div className="form-control__field__label">Assignee</div>
              <div className="form-control__field__input">
                <InputDropdown
                  id="assignee"
                  name="assignee"
                  placeholder="Enter assignee"
                  value={taskForm.assignee?.name}
                  onChange={handleChange}
                  type="text"
                  dropdownItem={usersItems}
                />
              </div>
            </div>
          </div>

          <div className="form-control__fields">
            <div className="form-control__field">
              <div className="form-control__field__label">Priority</div>
              <div className="form-control__field__dropdown">
                <InputDropdown
                  id="priority"
                  name="priority"
                  placeholder="Enter priority"
                  value={taskForm.priority}
                  onChange={handleChange}
                  type="text"
                  dropdownItem={priorityItems}
                />
              </div>
            </div>

            <div className="form-control__field">
              <div className="form-control__field__label">Status</div>
              <div className="form-control__field__dropdown">
                <InputDropdown
                  id="status"
                  name="status"
                  placeholder="Enter status"
                  value={taskForm.status}
                  onChange={handleChange}
                  type="text"
                  dropdownItem={
                    editClicked ? fullStatusItems : limitedStatusItems
                  }
                />
              </div>
            </div>
          </div>

          <div className="form-control__field">
            <div className="form-control__field__label">Tag</div>
            <div className="form-control__field__dropdown">
              <InputDropdown
                id="tag"
                name="tag"
                placeholder="Enter tag"
                value={taskForm.tag}
                onChange={handleChange}
                type="text"
                dropdownItem={tagsItems}
              />
            </div>
          </div>

          <div className="form-control__field">
            <div className="form-control__field__label">Description</div>
            <div className="form-control__field__textarea">
              <Textarea
                id="description"
                name="description"
                placeholder="Enter description"
                value={taskForm.description}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* <button type="submit">Add Task</button> */}
      </form>
    </Modal>
  );
};

export default AddTaskFormDialog;
