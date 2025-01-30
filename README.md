### Simplified Process for Feature Development (HLD & LLD)

This is the step-by-step process the team follows to build a new feature for a project. It covers both planning (HLD) and detailed design (LLD) stages, and focuses on working independently while still collaborating when necessary.

---

#### Step 1: **Reading the Requirements and Team Discussion**
- The team starts by reading the project’s requirements document (SRS) to understand what needs to be built.
- Everyone gathers in a meeting to talk through the features, discuss how they should work, and look at any wireframes (visual layouts) for guidance.

#### Step 2: **Assigning Features and Discussing Structure**
- After the discussion, each team member is assigned a specific feature to work on.
- They then figure out how to break down their feature into smaller pieces (the component structure).
- If anyone has questions or isn't sure about something, they can ask other team members for help.

#### Step 3: **Work on Design and Start Coding**
- Each person starts designing their feature in detail (LLD) and begins coding.
- Everyone works on their feature independently, meaning no one is waiting for someone else to finish before starting their own part.

#### Step 4: **Updating Design if There Are Changes**
- As work progresses, if a team member realizes that the design or component hierarchy needs to change, they update it.
- Anyone who wants to know what changes have been made can refer to the updated design. This makes it easy for team members to make further changes in the future based on the updated information.

#### Step 5: **Code Review and Helping Each Other**
- Once a feature is done, the team reviews each other's code to make sure it’s clean, works well, and meets quality standards.
- Team members offer feedback and help fix any issues to improve the code.

#### Step 6: **Team Lead’s Review**
- After the team review, the Team Lead takes a final look at each feature.
- If the Team Lead has any concerns or suggestions, they talk with the team member who worked on the feature.
- If something is complex or unclear, the Team Lead might hold a meeting to discuss it.

#### Step 7: **Handling Dependencies with Small Meetings**
- If someone is stuck because they need something from another team member’s feature, they can have a quick one-on-one discussion to sort it out.
- These small meetings ensure everyone can keep working without disturbing others.

#### Step 8: **Final Review and Wrapping Up**
- Once all the features are done, the Team Lead checks that everything fits together and works as expected.
- If needed, some final tweaks are made, and the feature is ready to be completed.

---

# Notification Feature (PoC)

## 📌 High-Level Design (HLD)

The **notification feature** allows users to:

1. **List all notifications** (show unread and read notifications).
2. **Use pagination or infinite scroll** for large notification lists.
3. **Mark notifications as read or unread**.
4. **Refresh to fetch the latest notifications**.

---

## 📌 Assigning the Task to a Developer

- The team assigns this feature to **Developer A**.
- Developer A will work on the **Low-Level Design (LLD)** and break down the feature into components.
- The LLD and component hierarchy will be documented for better understanding.

---

## 📌 Low-Level Design (LLD)

### **1. API Design**

- **GET /notifications** → Fetch notifications.
- **PATCH /notifications/{id}/read** → Mark as read.
- **PATCH /notifications/{id}/unread** → Mark as unread.

### **2. Database Schema (Example)**

```ts
interface Notification {
    id: string;
    message: string;
    isRead: boolean;
    createdAt: Date;
}
```

### **3. Component Hierarchy**

```
📂 features
├── 📂 notifications
    ├── 📂 ui
    │   ├── 📄 NotificationList.tsx  → Displays notifications
    │   ├── 📄 NotificationItem.tsx  → Single notification component
    │   ├── 📄 RefreshButton.tsx      → Fetch latest notifications
    ├── 📂 model
    │   ├── 📄 notificationTypes.ts   → TypeScript types
    ├── 📂 services
    │   ├── 📄 notificationApi.ts     → API requests logic
```

---

## 📌 Estimated Time & Workflow

| Task                      | Estimated Time | Assigned To       |
| ------------------------- | -------------- | ----------------- |
| HLD Finalization          | 1 day          | Team Discussion   |
| LLD & Component Breakdown | 2 days         | Developer A       |
| API Development           | 3 days         | Backend Developer |
| Frontend UI Development   | 4 days         | Developer A       |
| Testing & Bug Fixes       | 2 days         | QA Team           |
| Code Review & Deployment  | 1 day          | Team Review       |

⏳ **Total Estimated Time**: **\~10 days**

---

## 📌 Handling Team Collaboration & Absences

- **If a developer is on leave**, another can continue based on the **LLD & Component Hierarchy**.
- **Project Management Tools** like **JIRA, Notion, or Trello** can track progress.
- **Code Review**: Once development is complete, the team will review each other’s code to maintain **code quality**.

---

## 📌 Next Steps

✅ **Developer A** starts working on **LLD and component breakdown**.\
✅ **Backend Developer** sets up API endpoints.\
✅ **Team Reviews** and iterates based on feedback.

🚀 **Ready to start implementation!**
