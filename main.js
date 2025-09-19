import "./assets/css/tailus.css";

const mainHeader = document.querySelector("#header");
const menuBtn = document.querySelector("#menu-btn");

menuBtn.addEventListener("click", () => {
  mainHeader.dataset.state = mainHeader.dataset.state === "active" ? "closed" : "active";
})

document.addEventListener('DOMContentLoaded', () => {
  const tabGroups = document.querySelectorAll('[data-tabgroup]');

  tabGroups.forEach((tabGroup) => {
      const tabList = tabGroup.querySelector('[role="tablist"]');
      const tabs = tabList.querySelectorAll('[role="tab"]');
      const tabPanels = tabGroup.querySelectorAll('[role="tabpanel"]');
      const indicator = tabList.querySelector('[data-tabs-indicator]');

      function updateIndicator(selectedTab) {
          const tabRect = selectedTab.getBoundingClientRect();
          const tabListRect = tabList.getBoundingClientRect();
          indicator.style.width = `${tabRect.width}px`;
          indicator.style.left = `${tabRect.left - tabListRect.left}px`;
      }

      tabs.forEach((tab) => {
          tab.addEventListener('click', () => {
              const selectedTab = tab;
              const selectedPanelId = selectedTab.getAttribute('aria-controls');
              const selectedPanel = document.getElementById(selectedPanelId);

              tabs.forEach((t) => {
                  t.setAttribute('aria-selected', 'false');
                  t.setAttribute('tabindex', '-1');
              });
              tabPanels.forEach((panel) => {
                  panel.classList.add('hidden');
              });

              selectedTab.setAttribute('aria-selected', 'true');
              selectedTab.removeAttribute('tabindex');
              selectedPanel.classList.remove('hidden');

              updateIndicator(selectedTab);
          });
      });

      const initialSelectedTab = tabList.querySelector('[aria-selected="true"]');
      if (initialSelectedTab) {
          updateIndicator(initialSelectedTab);
      }
  });
});