import ui from 'touchui/dist/ui/index.js'
import App from './app.ui'

ui.start(App)

ui.preloadDialogs([
  require('#/pages/dialogs/loginInterface.ui')
])

ui.networkTimeout = 5
ui.networkBaseUrl = ''