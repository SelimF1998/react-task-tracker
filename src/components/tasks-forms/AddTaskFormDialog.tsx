import react, {useState} from 'react'
import Modal from '../modal/Modal';
import Input from '../input/Input';
import InputDropdown from '../input-dropdown/InputDropdown';
import Textarea from '../textarea/Textarea';
import './AddTaskFormDialog.scss';

export interface TaskFormData {
  title: string;
  description: string;
  assignee: string;
  priority: 'Low' | 'Medium' | 'High';
  status: 'Todo' | 'In Progress' | 'On Approval' | 'Done';
}

interface TaskFormDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (task: TaskFormData) => void;
}

const AddTaskFormDialog: React.FC<TaskFormDialogProps> = ({ isOpen, onClose, onSubmit }) => {
  const [taskForm, setTaskForm] = useState<TaskFormData>({
    title: '',
    description: '',
    assignee: '',
    priority: 'Medium',
    status: 'Todo'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setTaskForm({
      ...taskForm,
      [e.target.name]: e.target.value,
    });
  };

   const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskForm.title.trim()) return;
    console.log("Task Form:", taskForm);
    onSubmit(taskForm);
    setTaskForm({ title: '', description: '', assignee: '', priority: 'Medium', status: 'Todo' });
  };

  const handlePriority = (priority: 'Low' | 'Medium' | 'High') => {
    console.log("Priority:", priority);
    
     setTaskForm(prev => ({
    ...prev,
    priority: priority, // this is already typed correctly
  }));
  }

  const handleStatus = (status: 'Todo' | 'In Progress' | 'On Approval' | 'Done') => {

    setTaskForm(prev => ({
    ...prev,
    status: status, // this is already typed correctly
  }));

  }
      
  const priorityItems = {
        id: 1,
        items: [
          {
            name: "Low",
            onClick: () => handlePriority("Low")
          },
          {
            name: "Medium",
            onClick: () => handlePriority("Medium")
          },
          {
            name: "High",
            onClick: () => handlePriority("High")
          },
        ],
  };

  const statusItems = {
        id: 1,
        items: [
          {
            name: "Todo",
            onClick: () => handleStatus("Todo")
          },
          {
            name: "In Progress",
            onClick: () => handleStatus("In Progress")
          },
          {
            name: "On Approval",
            onClick: () => handleStatus("On Approval")
          },
          {
            name: "Done",
            onClick: () => handleStatus("Done")
          },
        ],
  };

  return (
    <Modal modalTitle="Create new task" isOpen={isOpen} onClose={onClose} submitButtonLabel="Create Task" onSubmitAction={handleSubmit} onCancelAction={onClose} >
      <form >
        <div className="form-control" >
          <div className="form-control__fields" >
            <div className="form-control__field" >
              <div className="form-control__field__label" >Task Name</div>
              <div className="form-control__field__input" >
                <Input
                  id="title"
                  name="title"
                  placeholder="Enter task name"
                  value={taskForm.title}
                  onChange={handleChange}
                  type="text" />
              </div>
            </div>

            <div className="form-control__field" >
              <div className="form-control__field__label" >Assignee</div>
              <div className="form-control__field__input" >
                <Input
                  id="assignee"
                  name="assignee"
                  placeholder="Enter assignee name"
                  value={taskForm.assignee}
                  onChange={handleChange}
                  type="text" />
              </div>
            </div>
          </div>

          <div className="form-control__fields" >
            <div className="form-control__field" >
              <div className="form-control__field__label" >Priority</div>
              <div className="form-control__field__dropdown" >
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

            <div className="form-control__field" >
              <div className="form-control__field__label" >Status</div>
              <div className="form-control__field__dropdown" >
                <InputDropdown
                  id="status"
                  name="status"
                  placeholder="Enter status"
                  value={taskForm.status}
                  onChange={handleChange}
                  type="text"
                  dropdownItem={statusItems}
                   />
              </div>
            </div>
          </div>

          <div className="form-control__field" >
              <div className="form-control__field__label" >Description</div>
              <div className="form-control__field__textarea" >
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