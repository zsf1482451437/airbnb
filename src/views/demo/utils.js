import { Space, Button, notification } from 'antd'

export default function openNotification (toDetail) {
  const btn = (
    <Space>
      <Button type="primary" size="small" onClick={toDetail}>
        显示更多房源
      </Button>
    </Space>
  )
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    btn,
  })
}