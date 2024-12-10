import { ElNotification } from 'element-plus'

export const notify = (title, message, type) => {
  ElNotification({
    title: title,
    message: message,
    type: type,
  })
}
