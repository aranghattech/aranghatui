import { Label, NativeSelect } from '@aranghat/base-react';

export default function WithLabel() {
  return (
    <>
      <Label htmlFor="status">Status</Label>
      <NativeSelect id="status" value="in-progress">
        <option value="">Select status</option>
        <option value="todo">Todo</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
        <option value="cancelled">Cancelled</option>
      </NativeSelect>
    </>
  );
}
