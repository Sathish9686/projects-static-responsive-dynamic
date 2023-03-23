import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabID, isActive} = props
  const {displayText, tabId} = tabDetails

  const activeTabClassName = isActive ? 'active-tab-btn' : ''
  const onTabProjects = () => {
    updateActiveTabID(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={onTabProjects}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
