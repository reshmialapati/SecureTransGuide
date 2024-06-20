import React from "react";
import "./MainContent.css"; 
import Footer from "./Footer";

function MainContent({ selectedItem, searchTerm, isSidebarCollapsed }) {
  const content = {
    Home: {
      homeimage: "Picture1.png",
    },
    INTRODUCTION: {
      heading: "Introduction to Secure Transfers",
      paragraphs: [
        "Secure Transfers is an advanced Managed File Transfer (MFT) tool designed to provide secure, reliable, and automated file transfer capabilities. Tailored for modern enterprise needs, Secure Transfers facilitates seamless data exchange between internal and external partners, staff members, machines, and servers, supporting various transfer patterns including Business-to-Business (B2B), Machine-to-Machine (M2M), Human-to-Human (H2H), and Group-to-Group (G2G).",
        "Secure Transfers offers a comprehensive suite of features aimed at ensuring data security and integrity throughout the file transfer process. With its user-friendly interface and robust security measures, Secure Transfers helps organizations reduce operational costs, enhance the quality of data transmissions, and comply with stringent regulatory requirements.",
      ],
    },
    KeyFeatures: {
      heading: "Key Features of Secure Transfers",
      paragraphs: [
        "Secure Transfers is designed to meet the diverse needs of modern enterprises, providing a reliable and secure platform for managing file transfers. Its robust feature set and intuitive interface make it an ideal solution for automating workflows, ensuring data security, and enhancing operational efficiency.",
      ],
      bulletPoints: [
        "Multi-Platform Support: Secure Transfers operates on multiple platforms including Windows, Linux, UNIX, and Mac OS, ensuring flexibility and compatibility with existing IT infrastructure.",
        "Browser-Based Interface: The tool includes a web-based administrator interface with a customizable dashboard, advanced graphical components, and drag-and-drop functionality for ease of use.",
        "Protocol Support: Secure Transfers supports a wide range of file transfer protocols such as SFTP, FTP/S, HTTP/S, and AS2, enabling secure and efficient data exchange.",
        "Encryption and Security: Protects files both at rest and in motion with AES256 encryption, ensuring data remains secure throughout the transfer process.",
        "Centralized Control and Auditing: Logs all file transfer activities in a central database, providing detailed audit trails and generating comprehensive management reports.",
        "High Availability and Load Balancing: Supports clustering for high availability and load balancing, ensuring continuous operation and efficient resource utilization.",
        "Role-Based Access Control: Implements extensive security controls and role-based permissions to manage user access and maintain data integrity.",
        "Integration with Enterprise Systems: Connects to various enterprise systems, databases, and messaging systems, facilitating seamless integration and workflow automation.",
        "Automated and Ad-Hoc File Transfers: Supports browser-based file transfers, secure email notifications, and document collaboration across devices.",
        "Metadata Tagging and Custom Controls: The platform allows for the addition of metadata during file uploads, enhancing the ability to track and manage files. Custom controls can limit file types, sizes, and the number of files uploaded, providing granular control over file transfer operations.",
        "Advanced Cryptography Features: SecureTransfers supports advanced cryptography features, including PGP and WinZip AES encryption for both inbound and outbound files. It also supports signing and verifying file signatures, ensuring the integrity and authenticity of transferred data.",
      ],

    },
    SecureTransfersPlatform: {
      heading: "SecureTransfers Platform",
      paragraphs: ["The SecureTransfers platform consists of:"],
      image: "STP.jpg",
      paragraphs1: [
        "●	Projects: Managed by Secure Store project Admins (PPO/PSO) consisting of folders, users, and access controls.",
        "●	Folders: Contain files accessible by users (both external and internal), organized by project with RBAC (Role-Based Access Control) capabilities.",
        "●	User Profiles: Allow access to the platform and specific folders.",
        "●	Folder Access Controls (RBAC): Provide Read-Only, Upload-Only, or Full-Access (CRUD) permissions.",
        "●	Public Access Points (POPs): Offer file transfer capabilities using a wide variety of secure file transfer protocols, including HTTPS, SFTP, WebDav, HDFS, and CIFS. Non-secure protocols like FTP are not supported.",
        "●	Different Storage Backend Options: Include NAS, Hadoop, AWS-S3, and other cloud storage solutions.",
      ],
    },
    SecureStore: {
      heading: "Secure Store",
      paragraphs: [
        "Secure Store is a comprehensive solution for securely managing and storing critical data. It simplifies the creation and management of users and folders, providing a robust platform for data organization and access control. Secure Store ensures that all data is protected with advanced security features, including encryption and access restrictions, making it an ideal choice for enterprises looking to safeguard their sensitive information.",
        "Focuses on Secure File Sharing and Collaboration:",
        "●	Interactive Human-Initiated File-Exchange: Facilitates seamless file transfers where employees can effortlessly share/send files with external partners and vice versa.",
        "Key Features:",
        "●	User and Folder Management: Streamlines the creation and management of users and folders, ensuring efficient data organization.",
        "●	Advanced Security: Implements top-tier encryption and access control measures to protect data from unauthorized access.",
        "●	Compliance: Assists organizations in meeting regulatory requirements for data storage and security.",
        "●	Scalability: Designed to handle the growing data needs of modern enterprises, ensuring seamless scalability.",
      ],
    },
    SecureAutomation: {
      heading: "Secure Automation",
      paragraphs: [
        "Secure Automation is a powerful tool designed to automate file transfers and workflows efficiently. It handles scheduled file transfers seamlessly, providing a secure way to automate data movement across various systems. Secure Automation supports a variety of transfer protocols and integrates effortlessly with existing infrastructure, making it an essential component for businesses aiming to streamline their file transfer processes.",
        "Supports Semi-Automated File Transfers:",
        "●	Inbound to Company:",
        "●	External partner (human or system) -> Hosted server.",
        "●	External partner posts file(s) to Secure Store folders.",
        "●	Using Secure Automation, push received files to the target system.",
        "●	Target system pulls data from Secure Store folders.",
        "●	Outbound to External Partner:",
        "●	Hosted server (or human) posts files on Secure Store folders.",
        "●	External partner pulls data from Secure Store application.",
        "●Secure Automation pushes files to the external target system (requires an active SFTP server on the partner's side).",
        "Key Features:",
        "●	Scheduled Transfers: Automates file transfers based on predefined schedules, reducing manual intervention and minimizing errors.",
        "●	Protocol Support: Supports multiple transfer protocols, including SFTP, FTPS, and HTTPS, ensuring secure data transmission.",
        "●	Integration: Easily integrates with existing systems and workflows, providing a flexible solution for diverse IT environments.",
        "●	Monitoring and Reporting: Offers comprehensive monitoring and reporting capabilities to track transfer activities and ensure compliance.",
      ],
    },
    PROJECTS: {
      heading: "Introduction to Projects",
      paragraphs: [
        "A “project” serves as a crucial organizational unit for managing specific file transfer activities, workflows, and tasks. Project Management within the SecureTransfers platform is designed to provide a comprehensive and streamlined approach to managing file transfer projects. This module ensures that all aspects of project administration are handled efficiently, from user and folder management to security and compliance. Administrators can easily create and configure projects, defining the necessary parameters and settings to meet specific organizational requirements. SecureTransfers allows for seamless management of users and folders within each project. Administrators can create, modify, and delete users, as well as organize folders to ensure optimal data organization and access control. The platform's Role-Based Access Control (RBAC) feature enables precise management of user permissions, ensuring that access to data is strictly controlled and monitored. Administrators can assign roles to users based on their responsibilities and access needs.",
        "SecureTransfers employs advanced encryption and security protocols to protect data at rest and in transit, ensuring that sensitive information is safeguarded against unauthorized access and breaches. The platform supports regulatory compliance by providing detailed audit trails and logging capabilities, helping organizations meet legal and regulatory requirements for data management and security. Designed to scale with the growing needs of modern enterprises, SecureTransfers can handle an increasing volume of data and users without compromising performance or security. The platform integrates seamlessly with existing enterprise systems, databases, and workflows, ensuring that project management is cohesive and efficient.",
        "Secure Store is a comprehensive solution within SecureTransfers for securely managing and storing critical data. It simplifies the creation and management of users and folders, providing a robust platform for data organization and access control. Secure Store ensures that all data is protected with advanced security features, including encryption and access restrictions, making it an ideal choice for enterprises looking to safeguard their sensitive information. It streamlines the process of creating and managing users and folders, ensuring efficient data organization. The module also helps organizations meet regulatory requirements for data storage and security while ensuring seamless scalability to handle the growing data needs of modern enterprises.",
        "Secure Automation, another essential module of SecureTransfers, focuses on automating file transfers and workflows efficiently. It handles scheduled file transfers seamlessly, providing a secure way to automate data movement across various systems. Secure Automation supports a variety of transfer protocols and integrates effortlessly with existing infrastructure, making it an essential component for businesses aiming to streamline their file transfer processes. It automates file transfers based on predefined schedules, reducing manual intervention and minimizing errors. The module supports multiple transfer protocols, ensuring secure data transmission, and integrates easily with existing systems and workflows, providing a flexible solution for diverse IT environments. It also offers comprehensive monitoring and reporting capabilities to track transfer activities and ensure compliance.",
      ],
      
    },
    KeyPurposes: {
      heading: "Key Purposes of a Project in Secure Transfers",
      paragraphs: [
        "Organization and Segmentation:Projects enable you to group related file transfer tasks, which is especially useful when managing multiple simultaneous file transfers. Different departments or teams can maintain their own projects, ensuring the separation of their file transfer activities from others.",
        "Workflow Management and Automation: Projects help you coordinate various tasks involved in file transfers, such as encryption, compression, scheduling, and notification. You can establish automated workflows to handle recurring file transfers, enhancing efficiency and reducing the need for manual intervention.",
        "Access Control, Security, and Customization: Projects allow you to assign specific roles and permissions to users, ensuring that only authorized personnel can access and manage the files and tasks within a project. Enhanced security measures, including user authentication, encryption protocols, and access restrictions, can be applied at the project level. Different projects may have varying requirements in terms of file transfer protocols, security settings, and notifications, allowing for customization to meet specific needs.",
        "Monitoring, Reporting, and Resource Management:Projects maintain detailed logs of all activities, providing an audit trail for file transfers, which is crucial for compliance and troubleshooting. You can generate reports on project activities to monitor performance and identify issues. Projects help you manage resources, such as storage and bandwidth, by allocating them appropriately to different tasks and users, enabling cost management and optimization.",
      ],
     
    },

    ProjectManagement: {
      heading: "Project Management",
      paragraphs: [
        "As a Primary or Secondary Owner, you have the ability to add, modify, and manage various aspects of a project.",
      ],
    },
    ProjectCreation: {
      heading: "Project Creation",
      paragraphs: [
        "To create a new project, follow these steps:",
        "1.	Click on +Projects to initiate the creation of a new project.",
        "2. Add Primary owner and Secondary owners in Managers tab.",
        "FIELDS: Fields marked with * are mandatory.",
        "● Name*: Provide a unique name for your project, using any combination of characters. Ensure that each project name is distinct, as duplicate names are not allowed. Please note that once a project name is created, it cannot be changed.",
        "● Quota*: Specify the required amount of space for your project in GB. This defines how much space is allocated to the project. Once the allocated space is full, transfers will not work. Make sure to allocate enough space based on project usage to avoid transfer failures in the future.",
        "● Retention*: Set the number of retention days for files in the project based on the project requirements. After the retention period, files will be deleted and cannot be retrieved.",
        "● Cost Center*: Provide the cost center code associated with your department. A cost center is a department or function within an organization that incurs costs but does not directly generate revenue. It is essential for tracking expenses, managing budgets, and improving resource allocation and financial accountability. This code helps your organization keep track of project expenses.",
        "● Primary Owner*: Search for the employee using their Employee ID and add them to the Primary Owner field. The Primary Owner will be responsible for the project and will have full access to the project and its configurations. They can make changes and add or modify Primary and Secondary Owners.",
        "● Secondary Owners*: Secondary Owner will be the second in line and responsible for any changes required in the absence of the Primary Owner. The Secondary Owner will be the first point of contact in the absence of the Primary Owner. They will have similar access as the Primary Owner, except they cannot change the Primary Owner but can add or delete other Secondary Owners.",
      ],
      image2: "projCreate1.png",
      paragraphs2: [
        "3.	Add Primary and Secondary Owners in the Managers Tab",
        "●	Primary Owner*: The Primary Owner is responsible for the project and has full access to its configurations. They can make changes and add or modify both Primary and Secondary Owners. Search for the employee by using their Employee ID and add them to the Primary Owner field.",
        "●	Click on the '+ Select Primary Owner' button to choose the Primary Owner.",
      ],
      image: "projCreate2.png",
      paragraphs1: [
        "●	Secondary Owners*: Secondary Owners are responsible for managing the project in the absence of the Primary Owner. They have similar access rights but cannot change the Primary Owner. They can add or remove other Secondary Owners.",
        "4.	Save the New Project.",
        "●	After filling in all the necessary information, click the 'Save' button to create the new project.",
      ],
      image3: "projCreate3.png",
    },
    ChangeOwnership: {
      heading: "Change ownership, including Primary and Secondary owners",
      paragraphs: [
        "To change owners for a project in Secure Transfers, follow these steps:",
        "1. Navigate to the appropriate tab.",
        "● Go to the tab where you can manage project owners and delegates.",
        "2. Select the Option to change owner",
        "● Use the provided buttons to change owners. Depending on your selection, additional pop-up windows will appear with corresponding fields and controls.",
        "Link the New Owner",
        "● Enter the EmployeeID of the new owner.Ensure to save the changes after making the updates.",
        "Note:",
      ],
      bulletPoints: [
        "Newly added owners will receive a “Welcome” email from the SecureTransfers platform, prompting them to activate their accounts and enabling access.",
        "Owners who are removed will be notified that their access has been revoked.",
      ],
    },
    UploadProjectLogo: {
      heading: "Uploading a Custom Logo",
      paragraphs: [
        "To upload a custom logo for your project in SecureTransfers, follow these steps:",
        "1. Navigate to the Logo Tab:",
        "● Projects without a custom logo will automatically be assigned a default logo.",
      ],
      image2: "uploadlogo1.png",
      paragraphs2: [
        "2.	Upload the Logo",
        "●	Click the 'Choose File' button.",
        "●	Select the logo file you wish to upload and confirm your selection.",
        "●	Verify that the uploaded logo is displayed correctly.",
        "3.	Save the Changes",
        "●	Click the 'Save' button to apply the changes.",
        "4.   Logo Specifications:",
        "●	Logos should ideally be 300(w) x 100(h) pixels.",
        "●	Accepted formats are jpg, gif, or png.",
        "The Save button will be inactive (grayed out) if mandatory data is missing. In such cases, navigate to the appropriate tab and update the mandatory fields before proceeding.",
      ],
    },
    DefineHelpMessage: {
      heading: "Define a project-specific help message",
      paragraphs: [
        "1.	Navigate to the Help Tab",
        "●	Locate the tab designated for help settings in your project management interface.",
      ],
      image2: "helpmessage.png",
      paragraphs2: [
        "2.	Enter the Support Mailbox",
        "●	In the designated field, enter the support mailbox address. This mailbox will be used by partners to contact your project-specific support team, typically using an externally accessible distribution list (DL).",
        "3.	Set the Custom Help Text",
        "●	Enter a customized help message in the appropriate field. This message will be visible to end-users when they click the help option, improving project-specific service communication.",
        "4.	Save the Changes.",
        "●	Ensure you save the changes after making these updates.",
      ],
      image: "helpmessage1.png",
    },
    GenerateLogReport: {
      heading: "Generate an activity log report",
      paragraphs: [
        "The SecureTransfers platform tracks users activities, including file uploads, downloads, and deletions.",
      ],
    },
    AccessViaAdminUI: {
      heading: "Access via Secure Transfers Admin UI",
      paragraphs: [
        "1.	Navigate to the Monitoring Section",
        "●	Select the 'Application Log' option.",
      ],
      image2: "adminuiaccess.png",
      paragraphs2: [
        "2.	Search Activity Logs",
        "●	In the Application Log screen, filter your search criteria.",
        "●	Click the 'Search' button.",
        "The system will return all matching records, detailing file-related activities such as who performed the action, what was done, and when it occurred. This includes delete (DELE), store (STOR), and retrieve (RETR) activities performed by users on specific projects and folders.",
      ],
    },
    ViaAuditingLogFolders: {
      heading: "Access Via Auditing Logs folder",
      paragraphs: [
        "1.	Start the Browser Client",
        "●	Use a browser client (preferably Chrome, Firefox, or Safari) and navigate to the public SecureTransfers Access Points (POPs).",
        "2.	Log In",
        "●	Use your EmployeeID login credentials to log in.",
        "3.	Locate the Audit Logs Folder",
        "●	Find the relevant project-specific <project name>_AuditingLogs folder. This folder contains zip files of all file transactions for the specified project on specific days. The folder is continuously updated with new files appended daily. Note that it is not automatically cleaned.",
      ],
      image2: "auditlog.png",
      paragraphs2: [
        "4.	Manage Folder Content",
        "●	It is the project admin's responsibility to maintain the content of this folder, including deleting or cleaning log files as necessary.",
        "5.	Download and Review Logs",
        "●	Download the zip files to your local PC or laptop.",
        "●	Unzip the content and use a file editor, Excel, or other tools to validate file exchange activity for the day, week, month, etc.",
      ],
    },
    USERS: {
      heading: "Users",
    },
    UserTypes: {
      heading: "User Types in Secure Transfers",
      paragraphs: [
        "The Secure Transfers platform supports various user types, allowing it to adapt to specific needs, roles, or entities. The type of users influences platform controls and affects certain built-in features like password resets. The basic user types are as follows:",
        "Employee:",
        "●	Associated with EmployeeID: Typically used for Human-to-Human (H2H) file exchange and not for Machine-to-Machine (M2M) or automated, scripted transfers.",
        "●	Account Suspension: Accounts with an EmployeeID with status as 'Terminated' are automatically suspended, preventing further use.",
        "●	Account Removal: Accounts are removed from the Secure Transfers platform and user list if the termination date was more than 15 days ago.",
        "●	Owner/Delegate Substitution: Terminated project Primary owners are replaced by the Secondary Owner.",
        "●	Password Integration: Passwords are integrated with the standard LDAP authentication process.",
        "●	Password Resets: Resetting passwords initialize Secure Transfers access without changing the end-user's network password.",
        "External Partner",
        "●	Usage: Typically used for Human-to-Human (H2H) file exchange and not for Machine-to-Machine (M2M) or automated, scripted transfers.",
        "●	Email Requirement: A valid non-network external email address is required.",
        "●	Account Activation: Partners who fail to activate their account within 30 calendar days are removed from the system.",
        "System Account (SystemInt)",
        "●	Usage: Typically used for Machine-to-Machine (M2M) or automated, scripted transfers.",
        "●	Email Requirement: Must be linked to a valid organization email address.",
        "External System Account (SystemExt)",
        "●	Usage: Typically used for Machine-to-Machine (M2M) or automated, scripted transfers.",
        "●	Email Requirement: Must be linked to a valid external email address.",
        "ADSecurityGroup (IAM)",
        "●	Active Directory Integration: Accounts are linked to and associated with an Active Directory (IAM) group, allowing user access to Secure Transfers Folders based on AD group membership.",
        "Advanced Partner Types",
        "●	Upload Only Iframe: This type is designed for embedding the Secure Transfers upload UI in a web application. Account management and password resets are handled the same way as for External Partners or System Accounts.",
        "●	Mail: Specific for integration with MS Exchange, used internally.",
        "●	API: Used for automatic management of folders, partners, and access control privileges within web application platforms.",
        "Management of External users and System Accounts",
        "●	External users, System Accounts, and External System Accounts are not automatically suspended or recertified annually. It is the responsibility of project owners to maintain the accuracy of these accounts, deleting or removing unused or obsolete accounts. Passwords can be reset by the users themselves or by project owners and must comply with IAPP password complexity rules.",
        "Shared Access to Folders",
        "●	Different partner types can share access to Folders, allowing both named internal employees and named external users or system accounts to access the same folders. Additionally, members of Active Directory (AD/IAM) groups can share access to Folders and files.",
        "●	Folder access privileges, such as read-only, upload-only, or full access, are managed at the user level. When using ADSecurityGroup type partners, access is managed at the group level, meaning the same access level applies to all group members.",
      ],
    },
    UserManagement: {
      heading: "User Management",
      paragraphs: [
        "As a project instance administrator, you are responsible for managing user accounts within Secure Transfers. This includes creating, updating, and deleting accounts, ensuring user accounts remain current, and recertifying them annually to remove any obsolete or inactive accounts. Any user accounts that are no longer needed should be removed from the platform.",
        "Account Activation and Expiration",
        "Newly created user accounts that have not been activated within 3o days will be set to an expired state, blocking all access to the platform. If an account remains in the expired state for over 60 days (a total of 3 months after creation), it will be automatically deleted from the platform, and an email notification will be sent to the user and the associated instance administrators.",
        "Re-activating User Accounts",
        "●	Project administrators can reactivate user access by resetting the account state to 'active' using the 'reset password' option. This action triggers an email to the user, prompting them to reactivate their login with a password of their choice. Users can also reactivate their platform access using the publicly available 'Reset my Access' function, accessible from the Secure Transfers internet-facing URLs.",
      ],
      image2: "usermanagement.png",
      paragraphs2: [
        "●	Instance administrators can reactivate expired user accounts by using the 'reset password' feature. Note that project Primary owners, secondary owners, and API accounts are exempt from automatic deletion.",
        "User Management Controls",
        "To manage users, the following UI controls are available:",
        "●	Create User.",
        "●	Update user profiles.",
        "●	Activate User.",
        "●	Delete User.",
        "●	SSH Access Control.",
        "●	Reset Passwords.",
        "●	Suspend and Resume User Accounts.",
        "●	Monitor User Activity.",
        "By effectively managing these aspects, you ensure that user accounts within Secure Transfers are secure, up-to-date, and properly maintained.",
      ],
    },
    createuser: {
      heading: "Creating a User",
      paragraphs: [
        "To create a new user in Secure Transfers, follow these steps:",
        "1.	Initiate User Creation",
        "●	Navigate to Users section under the Secure Store.",
        "●	Click the  “+create user” button to open the Create User pop-up.",
        "2.	Fill in User Details",
        "●	In the Create User pop-up window:",
        "●	Enter the relevant User Information",
        "●	For Employees, enter the necessary details.",
      ],
      image2: "createuser1.png",
      paragraphs2: [
        "●	For external or system users, ensure to fill in the Description field with relevant contact details, such as the user’s company name, division, or other pertinent information.",
        "●	Click Save",
      ],
      image: "createuser2.png",
    },
    updateuser: {
      heading: "Updating a User",
      paragraphs: [
        "To update an existing user in Secure Transfers, follow these steps:",
        "1.	Initiate User Update",
        "●	Select the desired user using the filtering controls and click the Update User button.",
      ],
      image2: "updateuser1.png",
      paragraphs2: [
        "2.	Modify User Information.",
        "●	In the pop-up window, navigate to the appropriate tab based on the changes required.",
        "●	Use the General tab to update generic user data, including name, email address, description, etc.",
        "●	Use the SSH tab to add an SSH-2 login key.",
        "3.	Save Changes.",
        "●	Click the Save button to apply the updates to the user profile.",
      ],
      image: "updateuser2.png",
    },
    activateuser: {
      heading: "Activating a user",
      paragraphs: [
        "Secure Transfers administrators can activate users via the Secure Transfers Admin UI, which is especially useful when users report issues, when managing system accounts, or during routine support activities.",
        "1.	Initiate User Activation.",
        "●	Select the desired user using the filtering controls and enter the desired password.",
        "●	Click the “activate” button.",
      ],
      image2: "activateuser.png",
    },
    configurecontrols: {
      heading: "Configuring Extended Controls for Users",
      paragraphs: [
        "Secure Transfers offers the ability to configure specific extended controls on user profiles. These controls allow you to set login frequency limits, file size limits, or restrict uploads to specific file types.",
        "To define the controls below, follow these steps:",
        "1.	Select User.",
        "●	Go to the Users section and select the desired user using the filtering controls.",
        "2.	Open Extended Controls",
        "●	Click the “EDIT” button.",
        "●	Select the Extended tab.",
        "3.	Define Controls.",
        "●	Enter the desired controls and then hit Save to apply them to the user profile.",
        "Available Controls.",
        "●	Whitelist Filename Extensions.",
        "●	Restrict file transfers to specific file extensions. For example, to allow only .pdf, .txt, and .csv formats:",
        "●	Max File Size",
        "●	Restrict file uploads to a maximum file size in kilobytes. For example, to set a maximum file size of 10,000 KB:",
        "●	User Login Frequency Control",
        "●	Control the frequency of user logins and temporarily block users exceeding the limit. For example, to restrict logins to 10 per minute and block for 30 minutes if exceeded.",
        "●	These controls are typically enforced for Machine-to-Machine (M2M) file transfer user types, such as System users and External System users, but are not enforced for Human users like Employees and External users.",
        "If these login frequency controls are not set, the global Secure Transfers platform defaults will apply, managed by the platform owners.",
      ],
      image2: "activateuser.png",
    },
    deleteuser: {
      heading: "Deleting a User",
      paragraphs: [
        "The function to delete a user in Secure Transfers will only be available and active when the following conditions are met:",
        "●	The user is not associated with any project Folders.",
        "●	The user is not an administrator (Primary or Secondary Owner) of any other project instances.",
        "To delete a User, follow these steps:",
        "1.	Select User",
        "●	Go to the Users section and select the desired user using the filtering controls.",
        "2.	Initiate Deletion",
        "●	Click the Delete User button.",
        "●	Confirm the deletion by clicking Confirm or cancel the action by clicking Cancel.",
      ],
      image2: "deleteUser.png",
      paragraphs2: [
        "After successfully deleting the user account, Secure Transfers platform will notify the user via email that their access has been revoked and their account has been deleted.",
      ],
    },
    validatefolderaccess: {
      heading: "Validating User Folder Access",
      paragraphs: [
        "Secure Transfers provides a way to test a user's folder access permissions, verify Folder configurations, and ensure access credentials for backend storage systems (AWS, Azure, HDFS, etc.) are correct.",
        "To validate user folder access, follow these steps:",
        "1.	Select User",
        "●	Go to the Users section and select the desired user using the filtering controls.",
        "2.	Access Folder Verification",
        "●	Click on the user's name link to enter the 'My Access' view for the user's Folders.",
        "●	At the bottom, click the Verify Folders button to run the verification.",
        "3.	Wait for Test Completion",
        "●	Allow some time for the test to complete. The duration depends on the number of associated folders.",
        "4.	Review Results",
        "●	On success, the system will confirm successful verification.",
        "●	On failure, the system will list the Folders where verification tests have failed. Failures may include incorrect storage names, incorrect access credentials (usernames, passwords, access keys, etc.). Where possible, the system will indicate the root cause of the access failure, though this is not always guaranteed.",
        "5.	Remediation",
        "●	To fix issues, go to the Folder details and verify the settings.",
        "●	Rerun the tests after making corrections.",
      ],
    },
    ADSecurityGroup: {
      heading: "ADSecurityGroup Active Directory/IAM User",
      paragraphs: [
        "The ADSecurityGroup user type in Secure Transfers allows any members of an Active Directory/IAM group to be granted access to a specific Folder. This feature is particularly useful for project teams leveraging IAM Managed Active Directory groups to manage assets, application access, and folder/file access, reducing the overhead of managing individual user accounts.",
        "Important Notes",
        "●	Restriction: Use of ADSecurityGroup is limited to staff members only and cannot be used to grant external user access to the Secure Transfers platform.",
        "●	Activation Delay: It may take up to 12 hours for AD user accounts added to AD groups to become active and for Folder access to be visible. This delay is due to the MFT platform caching AD group membership data for performance reasons.",
        "●	Cache Reset: To overcome this limitation, you can reset the cached values by suspending and unsuspending the associated ADSecurityGroup user via the User Management menu. However, it is recommended to wait for the system to update automatically.",
        "Managing Folder Access",
        "●	Group-Level Management: Folder access privileges (e.g., read-only, upload-only, full access) are managed at the group level, meaning all members of the AD group share the same access rights.",
        "●	Differentiating Access: If different access roles are needed, create separate AD groups (e.g., XXXX_FullAccess, XXXX_ReadOnly) to differentiate between required access privileges.",
        "Steps to Use ADSecurityGroup in Secure Transfers.",
        "1.	Create ADSecurityGroup User",
        "●	Create an ADSecurityGroup user type in Secure Transfers and assign it to an existing Active Directory group.",
      ],
      image: "ADsec.png",
      paragraphs1: [
        "●	In the 'Name' and 'Security Group' fields, enter the name of an existing Active Directory group that is used and managed by your project team.",
      ],
    },
    SSH2KeyAccess: {
      heading: "SSH-2 Key Based Access Control",
      paragraphs: [
        "Secure Transfers allows remote systems or servers to access the platform and exchange files using various methods, including:",
        "●	Login and Password: Supported for HTTPs and FTP(E)S protocols.",
        "●	SFTP Clients: Supported using either 'Login and Password' or 'SSH-2 key'.",
        "To enable SSH-2 key-based authentication for a remote server, follow these steps:",
        "1.	Generate Key Pair.",
        "●	Remote system administrators must create an RSA or ECDSA key pair (private and public). Although DSA keys are supported, it is not recommended due to their security weaknesses.",
        "2.	Share Public Key",
        "●	Remote system administrators should share the SSH-2 public key with Secure Transfers project instance administrators.",
        "3.	Associate Public Key with User",
        "●	Secure Transfers project instance administrators need to associate the remote server's public key with the corresponding user in Secure Transfers.",
        "Steps to Associate SSH-2 Key",
        "1.	Select User",
        "●	Go to the Users section and select the desired user using the filtering controls.",
        "2.	Open SSH-2 Key Configuration",
        "●	Click the Edit button.",
        "●	Go to the SSH tab.",
        "3.	Add Public Key",
        "●	Paste the content of the SSH-2 public key into the designated window.",
        "●	Click Save to return to the user management screen.",
      ],
      image: "ssh2Key.png",
    },
    SSH2KeyValidation: {
      heading: "SSH-2 Key Type, Length & Strength Validation",
      paragraphs: [
        "To verify the SSH-2 key properties for a user in Secure Transfers, including key type, hash (fingerprint), length, and strength, follow these steps:",
        "1.	Select User.",
        "●	Go to the Users section and select the desired user using the filtering controls.",
        "2.	Open SSH-2 Key Configuration.",
        "●	Click the Edit User button. ",
        "●	Select the SSH tab.",
        "3.	Verify Key Properties",
        "●	In the SSH tab, you can view and verify the SSH-2 key properties such as key type, hash (fingerprint), length, and strength.",
      ],
    },
    resettingpassword: {
      heading: "Resetting a User Password",
      paragraphs: [
        "To reset a users password in Secure Transfers, follow these steps:",
        "1.	Select User.",
        "●	Go to the Users section and select the desired user using the filtering controls.",
        "2.	Initiate Password Reset.",
        "●	Click the “Reset Access” button.",
        "●	Confirm the password reset and return to the user management screen.",
      ],
      image: "resetpassword.png",
      paragraphs1: [
        "3.	Post-Reset Actions",
        "●	After resetting the password, the user's status will change from Active to New, and the Password field will become active.",
        "●	Secure Transfers will send an email to the user, requesting them to reactivate their account by entering a valid password.",
        "4.	Optional: Set Password.",
        "●	Project administrators can optionally set the password on behalf of the user. Enter the new password in the Password field.",
        "●	Use the Save button to activate the user. The user status will switch back to Active.",
        "Note: Staff members' password resets are synchronized with their Active Directory passwords.",
      ],
    },
    useraccounts: {
      heading: "Suspending and Resuming User Accounts",
      paragraphs: [
        "As a project administrator, you have the ability to suspend user accounts, blocking them from accessing the Secure Transfers platform. Here’s how to suspend and resume (unsuspend) user accounts:",
        "Suspending a User Account",
        "1.	Select a User.",
        "●	Go to the Users section and select the desired user using the filtering controls.",
        "2.	Initiate Suspension.",
        "●	Click the 'suspend' button. This function can be accessed by clicking on the Edit icon.",
        "●	Confirm the suspension and return to the user management screen.",
        "3.	Status Change.",
        "●	After enabling the Suspend option, the user's status will change from Active to Suspended.",
        "Resuming (Un-suspending) a User Account",
        "1.	Select User",
        "●	Go to the Users section and select the desired user using the filtering controls.",
        "2.	Initiate Resumption.",
        "●	Click the 'unsuspend' button. This function can be accessed by clicking on the Edit icon.",
        "●	Confirm the resumption and return to the user management screen.",
        "3.	Status Change.",
        "●	After disabling the Suspend option, the user's status will change back to Active.",
        "Note: For security reasons, users will not be automatically informed via email that their account has been suspended or resumed. If administrators wish to notify users, they can manually send emails.",
      ],
    },
    FOLDERS: {
      heading: "Folders",
      paragraphs: [
        "As a SecureTransfers Administrator, it is essential to efficiently create, update, and delete folders and partners, as well as assign and manage folder access privileges. These tasks ensure smooth file exchanges between partners, systems, and servers using the SecureTransfers platform.Generate a project configuration and access audit report.",
      ],
      
    },
    OrganizingandManaging: {
      heading: "Organizing and Managing Folders",
      paragraphs: [
        "SecureTransfers provides a range of Folder options designed to meet diverse storage and file management requirements.These diverse Folder types ensure that SecureTransfers can cater to a wide array of storage and file handling needs, providing users with secure, efficient, and flexible solutions.",
      ],
      bulletPoints: [
        "Retention Folder: This option leverages on-premises storage infrastructure, featuring a configurable retention period, with a default setting of 90 days. Files are automatically deleted after the retention period expires, ensuring efficient space management. Additionally, it offers optional Data@Rest encryption for enhanced security of stored data.",
        "Permanent Folder: Ideal for scenarios where file retention is crucial, this eFolder type provides on-premises storage without automatic file deletion. Users can benefit from optional Data@Rest encryption to protect sensitive information.",
        "Event Flow Folder: This folder type is optimized for automation, supporting rule-based file transfers. It streamlines workflows by automating repetitive tasks and ensuring files are transferred according to predefined rules.",
        "AWS S3 Folder: Leveraging AWS S3 cloud storage, this option provides scalable and highly durable storage solutions. It is ideal for applications requiring flexible and reliable cloud-based storage.",
        "Glacier Folder: This eFolder type uses AWS Glacier for economical long-term file archiving. It is suited for storing data that is infrequently accessed but requires long-term retention at a low cost.",
        "Exchange Folder: This option connects to MS Exchange hosted mailboxes, enabling the automated extraction of email attachments. The extracted files are then securely stored in SecureTransfers Retention Folders, facilitating easy access and management.",
        "SharePoint Folder: Integrates with Microsoft SharePoint Online, allowing users to leverage SharePoint’s robust document management and collaboration features. It is perfect for organizations looking to enhance team collaboration and document workflows.",
        "Azure Blob Folder: This option utilizes Azure Blob Storage, offering a flexible, scalable, and cost-effective cloud storage solution. It is well-suited for applications requiring high availability and durability of stored data.",
        "GCP Folder: Leveraging Google Cloud Platform storage, this eFolder provides a robust and secure cloud storage solution. It is ideal for applications needing scalable and efficient cloud-based storage with easy integration into GCP services.",
      ],
    },
    CreatePartnersFolders: {
      heading: "Creating and Managing Partners & Folders",
      paragraphs: [
        "As an administrator for SecureTransfers, it is essential to efficiently create, update, and delete folders and partners, as well as assign and manage folder access privileges. These tasks ensure smooth file exchanges between partners, systems, and servers using the SecureTransfers platform.",
      ],
      bulletPoints: [
        "Retention Folder: This option leverages on-premises storage infrastructure, featuring a configurable retention period, with a default setting of 90 days. Files are automatically deleted after the retention period expires, ensuring efficient space management. Additionally, it offers optional Data@Rest encryption for enhanced security of stored data.",
        "Permanent Folder: Ideal for scenarios where file retention is crucial, this eFolder type provides on-premises storage without automatic file deletion. Users can benefit from optional Data@Rest encryption to protect sensitive information.",
        "Event Flow Folder: This folder type is optimized for automation, supporting rule-based file transfers. It streamlines workflows by automating repetitive tasks and ensuring files are transferred according to predefined rules.",
        "AWS S3 Folder: Leveraging AWS S3 cloud storage, this option provides scalable and highly durable storage solutions. It is ideal for applications requiring flexible and reliable cloud-based storage.",
        "Glacier Folder: This eFolder type uses AWS Glacier for economical long-term file archiving. It is suited for storing data that is infrequently accessed but requires long-term retention at a low cost.",
        "Exchange Folder: This option connects to MS Exchange hosted mailboxes, enabling the automated extraction of email attachments. The extracted files are then securely stored in SecureTransfers Retention Folders, facilitating easy access and management.",
        "SharePoint Folder: Integrates with Microsoft SharePoint Online, allowing users to leverage SharePoint’s robust document management and collaboration features. It is perfect for organizations looking to enhance team collaboration and document workflows.",
        "Azure Blob Folder: This option utilizes Azure Blob Storage, offering a flexible, scalable, and cost-effective cloud storage solution. It is well-suited for applications requiring high availability and durability of stored data.",
        "GCP Folder: Leveraging Google Cloud Platform storage, this eFolder provides a robust and secure cloud storage solution. It is ideal for applications needing scalable and efficient cloud-based storage with easy integration into GCP services.",
      ],
    },
    GenerateAuditReport: {
      heading: "Generate a project configuration and access audit report",
      paragraphs: [
        "SecureTransfers Admin provides the capability to generate a “Project Configuration & Access Audit Report”. This report helps administrators understand key aspects of their projects, including:",
        "●	Project settings such as name and file retention policies.",
        "●	Project instance details, such as cost center.",
        "●	Identification of Primary Owner and Secondary Owners.",
        "●	Folder access details, specifying who has access to which folders and their access levels.",
        "●	Types of folders and their linked storage.",
        "●	Utilized storage space.",
        "To generate the report, choose the relevant project. Click on the Show Project Report Icon. The system will dynamically generate a report containing an overview of the project's configuration, which will be displayed within a few seconds.",
      ],
      image2: "genauditreport.png",
    },

    CreateFolder: {
      heading: "Create a Shared Electronic Folder (eFolder)",
      paragraphs: ["Steps to create a Folder."],
      bulletPoints: [
        "Open the web browser and navigate to the SecureTransfers Admin console. Log in using your Network/NT-ID credentials.",
        "Select your project and click Display Project Folders to view the My Folders screen.",
        "Click the New Folder button to open the popup window.",
        "Enter a name for the folder (e.g., ProjectFiles) and select the appropriate folder type from the dropdown menu.",
        "Optionally, enable any necessary settings such as Encrypted Storage and click Save to store the configuration.",
        "The newly created folder will now appear in the My Folders screen.",
      ],
      image: "createFolder.png",
    },
    CreatePartners: {
      heading: "Create a New Partner",
      paragraphs: ["Steps to create a Partner."],
      bulletPoints: [
        "Navigate to the Users Tab: Go to the Secure Store section. Then Click on the “Users” tab.",
        "Add a New User: Look for the “+Create User” button and click on it.",
        "Fill in User Details: Provide the necessary information for the new user, such as their name, email address, and role.",
        "Save Changes: Save the user details by clicking the “Save” button. If the user already exists, simply search for their name, and assign them to your Folder(s).",
      ],
      image: "createPartners.png",
    },
    FolderAccess: {
      heading: "Assign Folder access privilages",
      paragraphs: [
        "Option 1: When you are in the “Create Partner” screen, look for the “Save & Go to Folder Accesses” icon. Clicking on this icon allows you to assign folder access privileges for the given user to specific folders.  Now, click on “Select and Add Folders” to choose the folders you want to configure. Assign access privileges using the tick boxes provided. You can either hit “Save” to finalize your settings or click “Select & Add Folders” to include additional ones. Always remember to complete the process by clicking “Save“ to ensure all changes are saved properly.",
      ],
      bulletPoints: [
        "Folder Naming Conventions: Folder names should include a valid combination of numeric (0-9), alphanumeric (A-Z, a-z), and underscore (_) characters. If starting with a numeric value, ensure the folder name contains at least one alphanumeric character.",
        "Allowed: Docs_001, Reports_2023,",
        "Data_A1, Not Allowed: 123",
      ],
    },
    ChangingFolderTypes: {
      heading: "Changing Folder Types",
      paragraphs: [
        "You can change the folder types for SecureTransfers Retention, EventFlow, and Permanent Folders. However, changing types for S3, Azure, or HDFS folders is not supported due to specific metadata requirements. To change a folder type:",
      ],
      bulletPoints: [
        "Activate Edit Function: Navigate to the desired folder using filtering controls. Look for the “Edit Folder Access” control ",
        "Update Folder Type:In the popup window, update the folder type and click “Save”.",
        "For SecureTransfers folders with “Encrypted Storage” remove exclamation option before changing the folder type.",
      ],
      image: "changeFolder.png",
    },
    FolderComments: {
      heading: "Folder Comments",
      paragraphs: [
        "Administrators can add comments to Folders for tagging, messaging, or providing additional information relevant to project administrators.",
        "Steps to add Folder Comments:",
      ],
      bulletPoints: [
        "Navigate to the desired folder using filtering controls.",
        "Look for the “Edit Folder Access” control .",
        "Navigate to the Comments tab and enter comments in the provided field. Save the changes.",
      ],
      image: "folderComments.png",
    },
    FolderBranding: {
      heading: "Folder Branding",
      paragraphs: [
        "SecureTransfers supports folder branding, allowing you to display project-specific logos in the SecureTransfers browser. This feature enhances project visibility and recognition.",
      ],
      bulletPoints: [
        "Select Folder and Edit:",
        "Navigate to the desired folder using filtering controls.",
        "Look for the “Edit Folder Access” control ",
        "Navigate to the “Logo” tab.",
        "Upload Logo: Upload the desired logo and save the changes. Note that custom logos can impact UI performance, so use this feature judiciously.",
      ],
      image: "folderBranding.png",
    },
    FolderAccessControls: {
      heading: "Folder Access Controls",
      paragraphs: [
        "SecureTransfers offers three types of folder access: “Read-Only,” and “Upload-Only,” Each type grants different permissions, ensuring appropriate access levels for different users.",
      ],
      bulletPoints: [
        "Read-Only: Allows downloads and file listing.",
        "Upload-Only: Allows uploads and directory listing. ",
        "Full-Access: Grants all permissions, including reading, writing, renaming, and deleting files.",
        "Upload Logo: Upload the desired logo and save the changes. Note that custom logos can impact UI performance, so use this feature judiciously.",
        "To optimize performance, limit the number of folders assigned to a user to fewer than 10, with a maximum suggested limit of 20. Exceeding this can slow down the UI response and login times, especially for cloud storage Folders.",
        "Set access controls via the “Users” section by editing the User’s folder access.",
        "Alternatively, use the “Folders” section to edit access for specific users.",
      ],
      image: "folderAccess.png",
    },
    DataatRestProtection: {
      heading: "Data at Rest Protection (Encrypted Storage)",
      paragraph: [
        "SecureTransfers provides encrypted storage for Retention and Permanent type Folders, ensuring that all files stored are encrypted using IAPP-certified cryptography. This feature is essential for handling sensitive data such as GxP, HIPAA, and PII.",
        "Steps to enable encryption for a folder.",
      ],
      bulletPoints: [
        "Navigate to the desired folder using filtering controls.",
        "Look for the “Edit Folder Access” control (represented by an icon)",
        "Enable the encrypted storage flag. Save the configuration.",
        "Activating data-at-rest protection in Secure Transfers does not guarantee that source or target systems (including external users) will properly handle file protection on their end. This protection ensures that files are encrypted when stored on the SecureTransfers MFT storage system. When handling highly sensitive data, it is recommended to use end-to-end encryption. This ensures that the data is protected and encrypted throughout its entire lifecycle, from source to target, providing a higher level of security during transfer.",
      ],
      image: "DataAtRest.png",
    },
    FolderVerification: {
      heading: "Folder Verification",
      paragraph: [
        "The SecureTransfers platform provides a way to test a partner’s folder access permissions and validate the configuration of folders. This includes verifying backend storage system access credentials, such as those for AWS, Azure, or HDFS.",
        "Steps to Validate Partner Folder Access:",
      ],
      bulletPoints: [
        "Select User: Navigate to the Users section and use the filtering controls to select the desired user.",
        "Access User Folder View: Click on the User's name link to enter the Access for User Folder view.",
        "Run Verification: At the bottom of the Access for User Folder view, click the Verify Folder button.",
        "Wait for Completion: Allow some time for the test to complete. The duration depends on the number of folders associated with the partner.",
        "Check Results:On success, the system will display a message indicating that all folders for the partner have been verified successfully.On failure, the system will list the Folders for which verification tests have failed, including possible reasons such as incorrect access credentials.",
      ],
      image: "DataAtRest.png",
    },
    TroubleshootingFailures: {
      heading: "Troubleshooting Failures",
      paragraph: [
        "This process ensures that partners have the correct access to the necessary folders and that the configuration is correctly set up for seamless operations.",
      ],
      bulletPoints: [
        "Failures may result from various issues, including incorrect S3 or Azure storage names, incorrect access credentials (usernames, passwords, access keys, etc.). Where possible, the system will provide the root cause of the access failure, though this cannot be guaranteed.",
        "To resolve issues, go to the folder details and verify the settings, then rerun the tests.",
      ],
    },
    TransferringFileswithSecureTransfers: {
      heading: "Transferring Files with SecureTransfers",
      paragraph: [
        "SecureTransfers offers multiple secure methods for connecting and transferring files, including HTTPS, SFTP, and FTPS. These protocols ensure safe file exchanges, sharing, and transfers.",
      ],
      bulletPoints: [
        "These methods ensure secure and efficient file transfers using the SecureTransfers platform, providing flexibility and reliability for your file management needs.",
      ],
    },
    SFTPFileTransfers: {
      heading: "Detailed Instructions to use an SFTP Client for File Transfers",
      paragraph: [
        "To transfer files using an SFTP client, follow these steps:",
        "The selection, provisioning, lifecycle management, configuration, and updates of SFTP client software are beyond the core support scope of the SecureTransfers team.",
      ],
      bulletPoints: [
        "Install or Download an SFTP Client:Choose an SFTP client that adheres to IAPP standards. Recommended options include FileZilla, WinSCP, and native Linux SFTP clients.",
        "Set Up the SFTP Client:Launch your chosen SFTP client. For this example, we will use FileZilla.",
        "Select SFTP (SSH File Transfer Protocol) as the transfer protocol.",
        "Configure the connection with the following details:Host or Server Name: (Select the appropriate SecureTransfers server), Port: 22 (default), Protocol: SFTP - SSH",
        "Authenticate:Log in using the provided username and password.When prompted, accept the server host key to establish a trusted connection.",
        "File Transfer:Navigate to the directories to find the files you need to transfer.Use the client interface to upload or download files as necessary.",
      ],
      image: "sftpFileTransfer.png",
    },
    FTPSFileTransfers: {
      heading: "Detailed Instructions to use an FTPS Client for File Transfers",
      paragraph: [
        "The selection, provisioning, lifecycle management, configuration, and updates of FTPS client software are beyond the core support scope of the SecureTransfers team.",
        "To transfer files using an FTPS client, follow these steps:",
      ],
      bulletPoints: [
        "Install or Download an FTPS Client:Choose an FTPS client that meets IAPP compliance standards. Recommended tools include FileZilla and native Unix/Linux FTPS commands.",
        "Set Up the FTPS Client:Launch your chosen SFTP client. For this example, we will use FileZilla.",
        "Select FTPS (FTP over explicit TLS/SSL) as the transfer protocol.",
        "Configure the connection with the following details: Host or Server Name: (Select the appropriate SecureTransfers server),Port: 21 (default), Protocol: FTPS - FTP over explicit TLS/SSL",
        "Authenticate:	Log in using the provided username and password., Accept the servers certificate to establish a trusted connection.",
        "File Transfer: Navigate to the directories to find the files you need to transfer. Use the clients interface to upload or download files as necessary.",
      ],
      image: "FTPSfileTransfer.png",
    },
    WebBrowserFileTransfers: {
      heading: "Detailed Instructions for Browser-Based File Transfers",
      paragraph: [""],
      bulletPoints: [
        "Open Your Web Browser: Use a recommended browser such as Chrome, Firefox, or Safari.",
        "Access the SecureTransfers Portal: Go to the SecureTransfers File Browser access point located on the left-hand side of the admin console UI.",
        "Log In: Enter your SecureTransfers credentials (username and password)",
        "Navigate to the Folder View",
        "After logging in, you will be directed to the Folder View screen, listing all Folders where you have access rights.",
        "The available buttons and controls depend on your user privileges and folder access.",
        "To File Transfer Select a specific folder by clicking on its name.",
        "The folders contents will be displayed (it may be empty initially).",
        "Use the provided interface controls to upload or download files.",
      ],
      image: "WebFileTransfer.png",
    },
    INTERFACEMANAGEMENT: {
      heading: "Interface Management",
      paragraphs: [
        "SecureTransfers uses interfaces to streamline the management of file transfers between your organization and its partners. These interfaces are configured to automate the handling and processing of files, ensuring secure and compliant data exchanges.",
      ],
    },
    KeyFunctions: {
      heading: "Key Functions of Interfaces in SecureTransfers",
      bulletPoints: [
        "Automated File Transfers: Interfaces are crafted to automate the flow of files to and from SecureTransfers, adhering strictly to predefined rules that dictate how files are handled, routed, and secured.",
        "Partner Integration: Each interface is associated with specific external partners or systems. This setup supports both inbound and outbound data flows, making the system versatile in handling various data transfer requirements. The platform processes files as defined by the interface configurations and linked to the respective partners sections: Interfaces sent to this partner, Interfaces sent from this partner, Interfaces pulled from this partner.",
      ],
    },
    SecurityandCompliance: {
      heading: "Security and Compliance",
      paragraphs: [
        "Interfaces incorporate robust security measures, including encryption and secure storage, to protect data during transit and at rest. This ensures that all transfers meet internal security policies and regulatory compliance needs.",
        "Operational Details",
      ],
      bulletPoints: [
        "Consistency in File Handling: SecureTransfers guarantees that the content and structure of files remain unaltered during the transfer process. The system handles files based on the configurations set within each interface, focusing solely on security and routing without modifying the file data.",
        "Filename Pattern Matching: The platform recognizes, and processes files based on filename patterns specified within the interface configurations. This feature allows the system to handle files dynamically, catering to various operational needs without manual intervention.",
        "Error Management: Files that do not conform to any existing interface configurations are flagged as 'unrecognized'. This mechanism ensures that all files are appropriately accounted for and processed only when they meet the system's stringent criteria.",
      ],
      paragraphs1: [
        "To ensure optimal performance and compliance in SecureTransfers, it is essential to regularly update and review interface configurations to adapt to changing business needs and partner requirements. Implementing robust monitoring tools to oversee interface performance and setting up alerts for any operational anomalies is crucial for maintaining system integrity. Additionally, maintaining comprehensive documentation of all interface settings and ensuring adherence to regulatory standards are vital practices.",
        "These steps not only help in achieving audit readiness but also in upholding the highest levels of data security and operational efficiency within the platform.",
      ],
    },
    ConfiguringInterface: {
      heading: "Configuring a Class Push Interface",
      paragraphs: [
        "A Class Push Interface on the SecureTransfers platform streamlines the process of automatically sending files to an associated partners system, effectively handling both source and destination parameters.",
        "Steps to Set up a Class Push Interface",
      ],
      bulletPoints: [
        "Interface Setup",
        "Adjusting File Management and Retention",
        "Compression Settings",
        "Cryptographic Configurations",
        "Signature Management",
        "Sequencing Files",
        "Transfer Scheduling",
      ],
      paragraphs1: [
        "Important Consideration: While character conversion is supported, it is intended as a best-effort service with the expectation that the receiving system is equipped to process any designated file format correctly.",
      ],
    },
    InterfaceSetup: {
      heading: "Interface Setup",

      bulletPoints: [
        "Navigate to the 'Interfaces' section under Secure Automation and start the configuration by selecting the '+create push' button.",
        "Choose the 'core' tab and proceed with the following actions",
        "Input a unique identifier for the interface in the 'Interface Name' box.",
        "Toggle the 'Interface Status' to Enabled or Disabled based on your operational needs.",
        "In the 'Filename Pattern' box, define the patterns for the filenames that will be processed.",
        "Select whether to activate 'Encrypted Storage', which secures files using SecureTransfers' encryption keys.",
        "Enable email notifications for successful file delivery under 'Alert on Success'. f. Conclude this section by clicking 'Save'.",
      ],
      image: "interfaceSetup.png",
    },
    FileManagementRetention: {
      heading: "Adjusting File Management and Retention",
      paragraphs: ["Transition to the 'Push' tab and specify:"],
      bulletPoints: [
        "The number of days for retaining processed files in the 'Retention' box.",
        "The file validation method, choosing from PLAIN, ZIP, or BPCS.",
        "The character encoding format for files: binary, ASCII, or EBCDIC.",
        "Commit these settings by clicking 'Save'.",
      ],
      image: "filemanagement.png",
    },
    CompressionSettings: {
      heading: "Compression Settings",
      paragraphs: ["In the 'Compression' tab:"],
      bulletPoints: [
        "Choose to turn compression on or off.",
        "Set parameters for decompressing files from Zip archives.",
        "Apply these choices by clicking 'Save'.",
      ],
      image: "compressionset.png",
    },
    CryptographicConfigurations: {
      heading: "Cryptographic Configurations",
      paragraphs: ["Utilize the 'Cryptography' tab to:"],
      bulletPoints: [
        "Establish your preferred encryption and decryption methods.",
        "Specify the use of a key or password for these processes.",
        "If necessary, enter the required password.",
        "Save your cryptographic settings.",
      ],
      image: "cryptoconfig.png",
    },
    SignatureManagement: {
      heading: "Signature Management",
      paragraphs: ["Visit the 'Signatures' tab:"],
      bulletPoints: [
        "Configure options for PGP signing and verification according to your security protocols.",
        "Save these preferences.",
      ],
      image: "sigMgmnt.png",
    },
    SequencingFiles: {
      heading: "Sequencing Files",
      bulletPoints: [
        "In the Sequence Number Offset box, enter the starting character of the sequence number in the filename.",
        "In the Sequence Number Length box, enter the length of the sequence number in the filename.",
        "In the Positive Tolerance box, enter a number. The interface will send an error and halt if more than this number of files are missing. A warning will be sent if the number of missing files is less than or equal to this number.",
        "In the Negative Tolerance box, enter a number. If set to 0, an error will be sent, and the interface will stop if the sequence number is smaller or equal to the previous one. A warning will be sent if it is within the tolerance.",
        "Click Save.",
      ],
      image: "seqfiles.png",
    },
    TransferScheduling: {
      heading: "Transfer Scheduling",
      paragraphs: ["In the 'Scheduling' tab:"],
      bulletPoints: [
        "Outline the times when transfers will occur, specifying start and end times.",
        "Select the applicable weekdays and exact dates of the month for these transfers.",
        "Save these scheduling details",
      ],
      image: "transferscheduling.png",
    },
    classPullInterface: {
      heading: "Configuring a Class Pull Interface",
      paragraphs: [
        "SecureTransfers offers a robust pull interface for system-to-system file transfers. This interface facilitates the retrieval of files from diverse storage solutions such as SFTP server folders, AWS S3 buckets, SharePoint folders, and Azure Blob stores, among others.",
        "Sequential File Retrieval",
        "By default, the pull interface in SecureTransfers operates under a Serial-FIFO (First In, First Out) configuration. This means that file transfers from designated storage locations are handled sequentially, one at a time, ensuring organized and traceable file handling. For instance, the system might start by pulling files from FolderX, proceed to FolderY, and continue in this manner through FolderZ. Within a specific folder, files are pulled sequentially, one at a time.",
        "Execution Time and Order",
        "The duration required to complete a pull operation can vary significantly, depending on factors such as the remote system's performance, network speed, and the volume and size of the files being transferred. For partners with a large number of pull interfaces, each containing hundreds of large files, a particular pull operation could take several minutes to several hours to complete. The total time required to pull all files is determined by the remote system capacity, the network speed, the number of files, and their size, and is outside the control of the SecureTransfers platform.",
        "The order in which files in a particular folder are pulled is determined by the output of the directory listing (e.g., the ls command) returned by the remote server. This order is typically alphabetical but not guaranteed, and SecureTransfers cannot guarantee or influence the order in which individual files are pulled.",
        "Enhanced Throughput with Parallel Processing",
        "For environments that require higher efficiency due to large volumes of data or files, SecureTransfers can be configured to operate in a parallel, multithreaded mode. In this configuration, both pull and push jobs run in parallel using multiple threads and multiple concurrent communication channels (sessions).",
        "In parallel mode, pull interfaces linked to a specific SecureTransfers partner will execute parallel threads starting at the same time (limited by the maximum number of concurrent push and pull sessions). Each thread pulls files sequentially within its designated folder, but multiple folders are processed simultaneously across different threads. This significantly enhances the throughput of file retrieval operations, increasing the number of files that can be pulled within a specific time slot. The pull cycle stops when all threads finish, i.e., when the last file is pulled in.",
        "Parallel mode allows for the retrieval of more files from different locations within a shorter time window. The overall performance gain from this mode depends on the remote server's response times, the number of concurrent sessions supported, network capacity, and the number and size of the files being pulled.",
        "The overall performance gain from this mode depends on the remote server's response times, the number of concurrent sessions established, network capacity, and the specifics of the files being pulled.",
      ],
    },
    setupClassPullInterface: {
      heading: "Steps to setup Class Pull Interface",
      bulletPoints: [
        "Class Pull Interface Setup",
        "Managing File Handling Options",
        "Scheduling File Transfers",
        "Ad-Hoc Scheduling",
      ],
    },
    CPInterfaceSetup: {
      heading: "Class Pull Interface Setup",
      bulletPoints: [
        "Navigate to the 'Interfaces' tab and click on the “+create pull” button to create a new pull interface.",
        "Under the “core” tab, perform the following setup:",
        "Interface Name: Enter a distinctive name for the interface.",
        "Interface Status: Toggle to 'Enabled' to activate or 'Disabled' to deactivate as required.",
        "Filename Pattern: Define the criteria for filenames that this interface will process.",
        "Encrypted Storage: Choose 'Off' for standard storage or enable encryption using SecureTransfers' internal keys.",
        "Alert on Success: Set to 'Off' for no alerts or enable to receive email notifications upon successful file transfer.",
        "Maximum Activity Interval: Enter the time in seconds to alert if no file is received within this interval. Leave blank to disable.",
        "Confirm these settings by clicking 'Save'.",
      ],
      image: "CPInterfaceSetup.png",
    },
    ManagingFile: {
      heading: "Managing File Handling Options",
      bulletPoints: [
        "Switch to the 'Pull' tab and set file management preferences:",
        "Rename on Source: Append a timestamp and 'SecureTransfers' to file names on the source after pulling to prevent reprocessing.",
        "Delete on Source: Select this option to delete files from the source post-successful transfer.",
        "UnZip Incoming: Choose to either keep this feature off or unzip incoming Zip files and process all contained files.",
      ],
      image: "CPmanagingFile.png",
    },
    SchedulingFileTransfers: {
      heading: "Scheduling File Transfers",
      paragraphs: ["Move to the 'Scheduling' tab:"],
      bulletPoints: [
        "Active Timespan: Enable to restrict file transfers to specific times.",
        "From - To: Set the begin and end times for the active period.",
        "Weekdays/Days of the Month: Select which days transfers are allowed and specify exact dates using commas (e.g., “3, 10, 17, 24, 31”).",
        "Click 'Save' to confirm the scheduling settings.",
      ],
      image: "CPschedulefiletrans.png",
    },
    AdHocScheduling: {
      heading: "Ad-Hoc Scheduling",
      paragraphs: ["In the 'Ad-Hoc Scheduling' tab:"],
      bulletPoints: [
        "Date & Time: Input specific times for when the interface should actively pull files.",
        "Use the 'Add' button to include these times in the schedule.",
      ],
      image: "CPadhocscheduling.png",
      paragraphs1: [
        "Key Considerations",
        "Files ready for pulling must be 'final and completed'—not open or being written to. Ideally, source applications should not write to the directory from which files are being pulled. If necessary, use a temporary filename tag (e.g., <filename>.<extension>.tmp) and rename files only after writing is complete.",
        "Configure the interface to recognize file names formatted as <filename>.<extension> to avoid processing incomplete files.",
      ],
    },
    AdvancedInterfaceConfiguration: {
      heading: "Advanced Interface Configuration for SecureTransfers",
      paragraphs: [
        "The Advanced Interface Configuration in SecureTransfers offers a suite of settings designed to enhance control over file transfer processes. These configurations ensure that file transfers are executed in an orderly, timely, and secure manner, tailored to meet specific operational requirements. This guide covers Sequence Validation, Inactivity Detection, Time-Based File Processing Restrictions, and Ad-Hoc Scheduling, each explained with detailed settings and examples.",
      ],
    },
    SequenceValidation: {
      heading: "Sequence Validation",
      paragraphs: [
        "Purpose and Importance: Sequence validation is vital for maintaining the integrity of processes that depend on the order of file arrivals. This is especially crucial in scenarios such as financial transactions, batch processing, and chronological data logging, where processing files out of sequence could lead to errors or data corruption.",
        "Detailed Configuration with Examples",
      ],
      bulletPoints: [
        "Sequence Number Offset: Indicates the position within the filename where the sequence number starts. Ex:10 (sequence number starts at the 10th character)",
        "Sequence Number Length: Specifies the number of characters that constitute the sequence number. Ex:4 (sequence number is 4 characters long)",
        "Positive Tolerance: Allows a set number of sequence numbers to be skipped without triggering an error, accommodating minor disruptions. Ex:5 (up to 5 missing sequence numbers allowed)",
        "Negative Tolerance: Ensures files are not processed if they arrive in reverse order. A zero setting means any deviation from the sequence triggers an error.Ex:0 (any reverse sequence triggers an error)",
      ],
      paragraphs1: [
        "Operational Example: A financial institution receives transaction files named trans_20220501_0001.txt, trans_20220501_0002.txt, etc. Sequence validation ensures these files are processed in the correct order, maintaining accurate financial records.",
      ],
    },
    InactivityDetection: {
      heading:
        "Inactivity Detection (Only Configurable on Interface of Class Pull)",
      paragraphs: [
        "Purpose and Importance: Inactivity detection monitors the continuous flow of files. If files are not received within a specified interval, the system alerts administrators to potential issues such as network disruptions or data source problems. This feature is crucial for systems requiring regular data updates.",
        "Detailed Configuration with Example",
      ],
      bulletPoints: [
        "Maximum Activity Interval: Defines the maximum time allowed between file arrivals. Exceeding this interval triggers an alert, prompting investigation and resolution of issues. Ex: 1800 seconds (30 minutes).",
      ],
      paragraphs1: [
        "Operational Example: An environmental monitoring system expects data files every 15 minutes. If no file is received within 30 minutes, the system triggers an alert, indicating potential sensor or connectivity issues needing immediate attention.",
      ],
    },
    TimeBasedFileProcessing: {
      heading: "Time-Based File Processing Restrictions",
      paragraphs: [
        "Purpose and Importance: This feature restricts file processing to specified times and days, optimizing system performance and ensuring compliance with operational schedules. It is particularly useful for balancing system loads and avoiding conflicts with maintenance windows or peak business hours.",
        "Detailed Configuration with Example",
      ],
      bulletPoints: [
        "Active Timespan: Enables file processing only during designated times.Ex: Enabled",
        "Timespan Settings: Specifies the start and end times for the active processing period.Ex: 22:00 to 02:00 (process files only between 10 PM and 2 AM)",
        "Day Restrictions: Allows file processing only on specific days, aligning with business operations and availability.Ex:Monday to Friday (process files only on weekdays)",
      ],
      paragraphs1: [
        "Operational Example: A retail company schedules file processing from 10 PM to 2 AM, Monday to Friday, to avoid disrupting daytime operations and to align with system maintenance schedules conducted during weekends.",
      ],
    },
    AdvancedAdHocScheduling: {
      heading: "Ad-Hoc Scheduling",
      paragraphs: [
        "Purpose and Importance: Ad-hoc scheduling is designed for one-time or irregular file transfers, providing flexibility for handling exceptional or unplanned data processing needs without altering regular schedules.",
        "Detailed Configuration with Example",
      ],
      bulletPoints: [
        "Specific Date and Time: Allows administrators to set exact dates and times for ad-hoc transfers, catering to special events or requirements.",
        "Example for Date and Time Settings: December 31st, 23:00 (schedule a transfer to occur at 11 PM on December 31st)",
      ],
      paragraphs1: [
        "Operational Example: During end-of-year reporting, an accounting firm schedules a special data transfer at 11 PM on December 31st to ensure timely processing of financial data, crucial for generating year-end reports.",
      ],
    },
    InterfaceCrypto: {
      heading: "Interface Cryptography Features",
      paragraphs: [
        "Introduction: SecureTransfers provides robust cryptographic features to ensure the security and integrity of files during transfer and storage. These features are essential for handling highly confidential data, adhering to industry standards, and facilitating secure communication between internal and external partners.",
        "I) Supported Cryptographic Standards: SecureTransfers supports several industry-standard cryptographic methods, including:",
        "1. PGP (Pretty Good Privacy): Utilizing Bouncy Castle Crypto APIs, SecureTransfers supports PGP encryption conforming to RFC 2440 (OpenPGP/GnuPG). It offers:",
        "●	256-bit AES (Advanced Encryption Standard).",
        "●	PGP CAST-128/CAST5.",
        "●	Triple DES (3DES).",
        "2. WinZip AES (256) Encryption: Providing an additional layer of security for file encryption using AES 256-bit encryption.",
        "II) Supported PGP Keys:",
        "●	RSA/DSA keys ranging from 1024 to 4096 bits, with or without additional passphrases.",
        "●	DSA-style PGP keys with expiration options ranging from 1 to 50 years.",
        "III) Tool Compatibility: GNU Privacy Guard (GPG) or OpenPGP tools can be used to verify and decrypt files, as well as to verify PGP keys generated or received during testing phases. Recommended tools include:",
        "●	Gpg4win (Windows)",
        "●	GnuPG (Unix/Windows)",
        "IV) Core Features: SecureTransfers supports a range of cryptographic operations to ensure data integrity and security:",
        "1.	Encryption of Outbound Files:",
        "●	PGP Encryption: Creates a second, encrypted version of the file with a .pgp extension. For example, example.txt becomes example.txt.pgp. The encrypted file is then transmitted.",
        "●	ZIP AES Encryption: Creates a second, encrypted version of the file with a .zip extension. For example, example.txt becomes example.txt.zip. The encrypted file is then transmitted.",
        "2.	Decryption of Incoming Files:",
        "●	PGP Decryption: Converts the encrypted data back into its original form, creating decrypted files without the .pgp extension. For example, example.txt.pgp becomes example.txt.",
        "●	ZIP AES Decryption: Converts the encrypted data back into its original form, creating decrypted files without the .zip extension. For example, example.txt.zip becomes example.txt.",
        "3.	File Signing:",
        "●	Sign outbound files using PGP keys to ensure the authenticity and integrity of the files.",
        "4.	Signature Verification:",
        "●	Verify PGP signatures on inbound files to confirm their authenticity and integrity.",
        "5.	Mixed Operations:",
        "●	Combine encryption and signing for outbound files.",
        "●	Combine decryption and signature verification for inbound files.",
        "Note: When 'Encrypt or decrypt using a password' is selected, a password is mandatory for both encryption and decryption. This option is not used when any PGP key option is selected.",
        "V) Creating PGP Keys:",
        "●	When creating a PGP key through SecureTransfers’ built-in functionality, a random passphrase is generated by default, consisting only of characters from the BASE64 alphabet.",
        "●	The target partners public key is used for encryption, and the source partner’s private key is used for decryption.",
      ],
    },
    UseCases: {
      heading: "Use Cases / Example Scenarios",
      paragraphs: [
        "Scenario 1: PGP Verify and Decrypt Process Use Case: An external partner sends an encrypted and signed file to SecureTransfers for decryption and verification.",
        "Process:",
        "1.	Key Exchange: SecureTransfers generates PGP key pairs and exchanges public keys with the external partner.",
        "2.	Partner Side: The partner encrypts the file using SecureTransfers' public key and signs it with their private key.",
        "3.	SecureTransfers Side: SecureTransfers verifies the signature using the partner's public key and decrypts the file using its private key.",
        "Scenario 2: PGP Encrypt and Sign Process Use Case: SecureTransfers sends an encrypted and signed file to an external partner.",
        "Process:",
        "1.	Key Exchange: SecureTransfers generates PGP key pairs and exchanges public keys with the external partner.",
        "2.	SecureTransfers Side: SecureTransfers encrypts the file using the partner's public key and signs it with its private key.",
        "3.	Partner Side: The partner verifies the signature using SecureTransfers' public key and decrypts the file using their private key.",
      ],
    },
    PGPFeatures: {
      heading: "SecureTransfers Supported PGP Features",
      paragraphs: [
        "PGP Operations: SecureTransfers supports common PGP operations, including:",
        "●	Encryption and Decryption: Ensuring that data is securely encrypted during transmission and decrypted upon receipt.",
        "●	Signing and Verification: Ensuring data integrity and authenticity through digital signatures.",
        "Combined Operations: SecureTransfers allows combining these operations for enhanced security:",
        "●	Encrypt and Sign: Encrypt a file and then sign it to ensure both confidentiality and authenticity.",
        "●	Verify and Decrypt: Verify the signature of an incoming file and then decrypt it.",
      ],
    },
    SendingEncryptedFiles: {
      heading: "Sending Encrypted Files to Partner",
      paragraphs: [
        "Sending PGP or WinZipAES Password-Protected Files:",
        "Steps:",
        "1.	In SecureTransfers Admin UI:",
        "●	Select the project instance.",
        "●	Go to the 'Interfaces' tab and select the interface to edit.",
        "●	In the 'Cryptography' tab, configure the following:",
        "●	Encryption: Choose 'Encrypt with PGP' or 'Encrypt with ZIP AES 256'.",
        "●	Decryption: Set to 'Decryption off'.",
        "●	Use Key or Password: Select 'Encrypt or decrypt using a password' and enter the password.",
        "●	Click 'Save'.",
        "PGP Example:",
        "●	A file named example.txt is encrypted and saved as example.txt.pgp.",
        "ZIP AES Example:",
        "●	A file named example.txt is compressed and encrypted, resulting in example.txt.zip.",
        "Sending PGP Key-Protected Files:",
        "Steps:",
        "●	In SecureTransfers Admin UI:",
        "●	Select the project instance.",
        "●	Go to the 'Partners' tab and add partners representing the source and target.",
        "●	Configure the encryption keys:",
        "●	Generate or Import PGP Keys: Provide the required details or generate  new keys.",
        "●	Go to the 'Interfaces' tab and configure the cryptographic settings:",
        "●	Encryption: Choose the appropriate PGP encryption option.",
        "●	Decryption: Set to 'Decryption off'.",
        "●	Use Key or Password: Select 'Encrypt or decrypt using the partner's PGP encryption & decryption keys'.",
        "●	Click 'Save'.",
      ],
    },
    ReceivingEncryptedFiles: {
      heading: "Receiving Encrypted Files from Partner",
      paragraphs: [
        "1. Receiving PGP or WinZipAES Password-Protected Files:",
        "Steps in SecureTransfers Admin UI:",
        "●	Select the project instance.",
        "●	Go to the 'Interfaces' tab and select the interface to edit.",
        "●	In the 'Cryptography' tab, configure the following:",
        "●	Encryption: Set to 'Encryption off'.",
        "●	Decryption: Choose 'Decrypt PGP encrypted files' or 'Decrypt ZIP encrypted files'.",
        "●	Use Key or Password: Select 'Encrypt or decrypt using a password' and enter the password.",
        "●	Click 'Save'.",
        "2. Receiving PGP Key-Protected Files:",
        "Steps in SecureTransfers Admin UI:",
        "●	Select the project instance.",
        "●	Go to the 'Partners' tab and add partners representing the source and target.",
        "●	Configure the encryption keys:",
        "●	Generate or Import PGP Keys: Provide the required details or generate new keys.",
        "●	Go to the 'Interfaces' tab and configure the cryptographic settings:",
        "●	Encryption: Set to 'Encryption off'.",
        "●	Decryption: Choose 'Decrypt PGP encrypted files'.",
        "●	Use Key or Password: Select 'Encrypt or decrypt using the partner's PGP encryption & decryption keys'.",
        "●	Click 'Save'.",
      ],
    },
    PGPTroubleshooting: {
      heading: "PGP Troubleshooting",
      paragraphs: [
        "For troubleshooting PGP issues, administrators are encouraged to use tools like pgp4win. The 'Kleopatra' module within pgp4win allows for importing and validating PGP keys, ensuring they are valid and safe for use. It also provides encryption and decryption capabilities for testing and troubleshooting purposes.",
        "Examples:",
        "●	Decrypting a PGP-encrypted file using the incorrect key.",
        "●	Verifying and decrypting a PGP-signed and encrypted file.",
        "●	Testing the full PGP encryption/decryption cycle to ensure proper configuration and operation.",
      ],
    },
    FileActions: {
      heading:
        "File Compression, Decompression, and Multi-File Unzip for PULL Interfaces",
      paragraphs: [
        "SecureTransfers offers advanced features for file compression, decompression, and multi-file unzipping, designed to enhance the efficiency and management of file transfers. These functionalities optimize storage space, reduce transfer times, and ensure accurate processing of multiple files contained within compressed archives.",
      ],
    },
    FileCDFreatures: {
      heading: "File Compression and Decompression Features",
      paragraphs: [
        "Purpose and Importance: File compression reduces file size, making transfers quicker and more efficient, while decompression ensures files are restored to their original state for processing. These features are crucial for managing large datasets and minimizing storage requirements.",
        "Detailed Features:",
        "I) File Compression:",
        "1.	Compression Options: SecureTransfers allows users to compress files before sending them, reducing transfer time, and optimizing network usage.",
        "2.	Supported Compression Formats: The platform supports popular formats such as ZIP.",
        "3.	Configuration Steps:",
        "●	Navigate to the 'Interfaces' tab in the SecureTransfers Admin UI.",
        "●	Select the project instance.",
        "●	In the 'Interfaces' list, select the interface name to edit.",
        "●	Click on the 'Compression' tab.",
        "●  Select 'SecureTransfers compresses and forwards the file in a Zip archive.'",
        "4.	Click 'Save.'",
        "Note: Compression is only configurable on an Interface of Class push. ZIP creates a second, compressed version of the file with a .zip extension. The compressed file Original-filename.zip is then passed on.",
        "II)	File Decompression:",
        "1.	Decompression on Receipt: SecureTransfers can automatically decompress received files, ensuring they are in their original format for processing.",
        "2.	Supported Decompression Formats: The platform supports decompressing files in ZIP format.",
        "3.	Configuration Steps:",
        "●	Navigate to the 'Interfaces' tab in the SecureTransfers Admin UI.",
        "●	Select the project instance.",
        "●	In the 'Interfaces' list, select the interface name to edit.",
        "●	Click on the 'Compression' tab.",
        "●	Select 'SecureTransfers decompresses and forwards the first file from the Zip archive.'",
        "●	Click 'Save.'",
        "Note: Decompression is only configurable on an Interface of Class push. ZIP converts the compressed data back into its original form and creates decompressed files without the .zip extension. filename.extension.zip will be passed as filename.extension. The Zip archive can combine multiple individual files; however, only the first file is extracted.",
      ],
    },
    MultiFileUnzip: {
      heading: "Multi-File Unzip for PULL Interfaces",
      paragraphs: [
        "Purpose and Importance: The multi-file unzip feature for PULL interfaces handles compressed files containing multiple individual files. This ensures that all files within a compressed archive are extracted and processed separately, streamlining data handling and integration processes.",
        "Detailed Features:",
        "I)	Unzipping Incoming Files:",
        "1.	Automatic Unzip: SecureTransfers can automatically unzip incoming files, extracting all contained files for individual processing.",
        "2.	Configuration Steps:",
        "●	Navigate to the 'Interfaces' tab in the SecureTransfers Admin UI.",
        "●	Select the project instance.",
        "●	In the 'Interfaces' list, select the interface name to edit.",
        "●	Click on the 'Pull' tab.",
        "●	Select 'UnZip the incoming Zip file and submit all files from within the Zip file individually to SecureTransfers.'",
        "●	Click 'Save.'",
        "Note: ZIP converts the compressed data back into its original form and creates decompressed files without the .zip extension. All files from within the Zip file are submitted individually to SecureTransfers.",
        "II)	Handling Large Volumes:",
        "1.	Efficiency in Processing: The multi-file unzip feature ensures that large volumes of data within a single compressed file are efficiently handled, reducing manual intervention and potential errors.",
        "2.	Configuration Steps:",
        "●	Navigate to the 'Interfaces' tab in the SecureTransfers Admin UI.",
        "●	Select the project instance.",
        "●	In the 'Interfaces' list, select the interface name to edit.",
        "●	Click on the 'Preprocess' tab.",
        "●	Ensure 'UnZip incoming' is configured correctly.",
        "●	Specify any additional settings for file retention and handling post-unzipping.",
        "●	Click 'Save.'",
      ],
    },
    CombinedConfigurationExample: {
      heading: "Scenario: Transferring and Processing a Compressed Archive",
      paragraphs: [
        "1.	Configure Compression for Outbound Files:",
        "●	In SecureTransfers Admin UI, navigate to the 'Interfaces' tab.",
        "●	Select the project instance.",
        "●	In the 'Interfaces' list, select the interface used for sending files.",
        "●	Go to the 'Compression' tab.",
        "●	Enable 'SecureTransfers compresses and forwards the file in a Zip archive.'",
        "●	Click 'Save.'",
        "2.	Configure Decompression and Unzipping for Incoming Files:",
        "●	In SecureTransfers Admin UI, navigate to the 'Interfaces' tab.",
        "●	Select the project instance.",
        "●	In the 'Interfaces' list, select the PULL interface used for receiving files.",
        "●	Go to the 'Compression' tab.",
        "●	Enable 'SecureTransfers decompresses and forwards the first file from the Zip archive.'",
        "●	Go to the 'Pull' tab.",
        "●	Enable 'UnZip the incoming Zip file and submit all files from within the Zip file individually to SecureTransfers.'",
        "●	Click 'Save.'",
        "Outcome: A large dataset is compressed into a ZIP file and transferred efficiently. Upon receipt, SecureTransfers decompresses the ZIP file and extracts all individual files, ensuring they are ready for immediate processing and integration.",
      ],
    },
    EncryptedStorage: {
      heading: "Encrypted Storage (Data@Rest Protection) Feature",
      paragraphs: [
        "SecureTransfers provides the capability to automatically encrypt files stored within its internal storage, known as Data@Rest Protection. This feature is essential for protecting sensitive data, such as Personally Identifiable Information (PII), SOX compliance data, classified reports, GXP, GMP, and other restricted information, from unauthorized access, manipulation, or alteration. It also aids in detecting any unintended changes to file content.",
      ],
    },
    DetailedFeatures: {
      heading: "Detailed Features",
      paragraphs: [
        "Purpose and Importance: Data@Rest Protection ensures that files stored on the SecureTransfers platform are encrypted, safeguarding them from unauthorized access by anyone with access to the platform or its supporting infrastructure.",
        "Automatic Encryption: Files that match an interface with encrypted storage enabled are always stored in an encrypted format. This applies regardless of whether the files also match other interfaces.",
        "●	For Pull Interfaces: Files stored due to this pull interface (including those for all matching push interfaces) are encrypted.",
        "●	For Push Interfaces: Files stored for this push interface and all interfaces matching the same file are encrypted.",
      ],
    },
    ConfigurationSteps: {
      heading: "Configuration Steps",
      paragraphs: [
        "1.	Setting Encrypted Storage on an Interface:",
        "●	In the SecureTransfers Admin UI, navigate to the 'Interfaces' tab.",
        "●	Select the project instance.",
        "●	In the 'Interfaces' list, select the interface name you want to edit.",
        "●	Click on the 'Core' tab.",
        "●	Enable 'Encrypted Storage' by selecting 'SecureTransfers stores the files encrypted using an internal SecureTransfers private key.'",
        "●	Click 'Save.'",
        "Notes:",
        "●	Files that are already PGP or ZIP encrypted by SecureTransfers are not re-encrypted. Other files are encrypted with the encrypted storage PGP key.",
        "Example Use Case: A healthcare organization uses SecureTransfers to store and transfer patient records. By enabling Data@Rest Protection, all patient records are automatically encrypted when stored, ensuring compliance with healthcare data protection regulations, and safeguarding sensitive information against unauthorized access.",
        "SecureTransfers' Data@Rest Protection feature provides robust security for sensitive files stored within the platform. By ensuring that all stored files are encrypted, this feature helps organizations protect against unauthorized access and maintain the integrity of their data. The configuration process is straightforward, allowing administrators to easily enable encrypted storage on any interface, thereby enhancing the overall security of their file management system.",
      ],
    },
    GuidetoConfiguringPartners: {
      heading: "Guide to Configuring Partners in SecureTransfers",
      paragraphs: [
        "The Partners tab in SecureTransfers Admin UI is a critical feature that enables project administrators to define, configure, and manage partner-related parameters for seamless and secure file transfers. This guide provides comprehensive instructions on adding partners and configuring their settings, ensuring that all essential information is included.",
        "Adding a Partner",
        "1.	Access SecureTransfers Admin UI:",
        "●	Log into the SecureTransfers Admin UI using your administrative credentials.",
        "2.	Select the Project Instance:",
        "● From the list of available projects, select the relevant project instance that you want to configure.",
        "3.	Navigate to the Partners Tab under Secure Automation:",
        "●	Click on the 'Partners' tab located in the main menu to access the partner management interface.",
        "4.	Add a New Partner:",
        "●	Click the '+create partner' button to initiate the process of adding a new partner. This will open a new configuration window.",
        "5.	In the 'Core' section, enter the required details:",
        "●	Partner Name: Enter a unique name for the partner. This name will be used to identify the partner in the system.",
        "●	Partner Status: Select the status of the partner. Choose 'Enabled' to activate the partner or 'Disabled' to deactivate it.",
        "●	Host Protocol: Select the appropriate host protocol from the dropdown menu and enter the relevant connection details.",
      ],
    },
    HostProtocols: {
      heading: "Host Protocols and Their Parameters",
      image: "hostprotocol.png",
    },
    AdditionalSettings: {
      paragraphs: [
        "Additional Settings:",
        "●	'.tmp'-Feature: Select either '“.tmp “-feature off' or 'SecureTransfers appends “.tmp“ to indicate that the file is still being transferred.",
        "●	Send & Pull Interval: Enter the interval in seconds for sending and pulling files. This determines the frequency at which SecureTransfers will initiate sessions with the partner's server.",
        "●	Max. Concurrent Push Sessions: Select the number of concurrent sessions to use. This controls how many files can be transferred simultaneously.",
        "●	Extended Settings: Enter additional settings when required, particularly for protocols like SFTP.",
        "Extended Settings for SFTP:",
        "●	sftp.compression=false: Disables SFTP transfer compression if the server supports it. This can be useful for reducing the load on the server.",
        "●	sftp.filenames.charset=ISO-8859-1: Reverts filename encoding to ISO-8859-1 for older SFTP servers. This ensures compatibility with systems that do not support UTF-8 encoding.",
      ],
    },
    CoreConfigurationParameters: {
      heading: "Core Configuration Parameters",
      paragraphs: [
        "1.	Project Name: The name of the project to which the partner belongs. This helps in organizing and managing different partners under specific projects.",
        "2.	Partner Name: A unique name assigned to the partner for identification purposes.",
        "3.	Partner Status: Indicates whether the partner is active (enabled) or inactive (disabled). A disabled partner cannot receive files from SecureTransfers.",
        "4.	Host Protocol: The protocol used by SecureTransfers to interact with the partner. This determines how files are transferred between systems.",
      ],
    },
    HostProtocolsUsage: {
      image: "hostprotocolusage.png",
    },
    SecurityNotes: {
      paragraphs: [
        "Important Considerations:",
        "●	Use FQDNs: Always use Fully Qualified Domain Names (FQDN) for server names instead of IP addresses to ensure consistent and reliable connectivity.",
        "●	'.tmp'-Feature Limitations: Do not use the '.tmp'-feature in combination with SMB (Windows shares) or mainframe communication, as this can cause compatibility issues.",
        "●	Cross-Project Transfers: Avoid transferring files between different SecureTransfers project instances to prevent incompatibility issues and ensure data integrity.",
        "Security Notes:",
        "●	Single Factor Authentication for SFTP: SecureTransfers supports single-factor authentication methods for SFTP, including Account + Password, Account + SSH2, and Account + SSH2 & Passphrase.",
        "●	Avoid Renaming Files: Renaming files after uploading them to SecureTransfers can cause file corruption and processing delays. Ensure that file names remain consistent throughout the transfer process.",
      ],
    },
    addpartnerwithsftp: {
      heading: "Adding a Partner with SFTP Protocol",
      bulletPoints: [
        "Access SecureTransfers Admin UI and select the project instance.",
        "Navigate to the 'Partners' tab and click the '+create partner' button.",
        "In the Core section, enter the partners name as 'Partner_A'.",
        "Set the partner status to 'Enabled'.",
        "Select 'SFTP' as the host protocol and enter the connection details:",
        "Hostname: sftp.partnerA.com",
        "Port: 22",
        "Username: sftp_user",
        "Password: sftp_password",
        "Enable the '.tmp'-feature to append '.tmp' to filenames in transit.",
        "Set the Send & Pull Interval to 600 seconds.",
        "Set the Max. Concurrent Push Sessions to 3.",
        "In Extended Settings, add sftp.compression=false.",
        "Click 'Save'.",
      ],
      image: "addpartnersftp.png",
    },
    addpartnerwithaws: {
      heading: "Adding a Partner with AWS S3 Protocol",
      paragraphs: [
        "1.	Access SecureTransfers Admin UI:",
        "●	Log in to the SecureTransfers Admin UI and select the project instance.",
        "2.	Navigate to the 'Partners' Tab:",
        "●	Click on the Partners tab.",
        "●	Click the '+create partner' button to add a new partner.",
        "3.	Enter Core Settings:",
        "●	In the Core section, enter the partners name as S3Target.",
        "●	Set the partner status to Enabled.",
        "●	Select AWS S3 as the host protocol.",
        "4.	Enter Connection Details:",
        "●	User Name: S3_User",
        "●	Password: Enter the password set in Secure Store for User S3_User",
        "●	The user S3_User should be added as a user in the AWS S3 type folder created in the project. Only users who have access to the AWS S3 folder should be provided here.",
        "5.	Set Intervals and Sessions:",
        "●	Set the Send & Pull Interval to 60 seconds.",
        "●	Set the Max. Concurrent Push Sessions to 3.",
        "6.	Save the Configuration:",
        "●	Click Save.",
      ],
      image: "addpartnerwithaws.png",
    },
    PullInterfacePartnersTab: {
      heading: "Steps to Configure a Pull Interface from the Partners Tab",
      paragraphs: [
        "1.	Log in to the Secure Transfers Admin UI:",
        "●	Navigate to the project instance.",
        "2.	Access the Partners Tab:",
        "●	Click on the Partners tab.",
        "●	Select the partner from whom you want to pull files.",
        "●	Click on “+pull”  button to open the transfer pull configuration tab.",
        "3.	Select the interface from the drop-down menu.",
        "4.	Define Source and Archive Folders:",
        "●	Source Folder: Specify the folder directory on the source system where Secure Transfers will search for files.",
        "●	Archive Folder: Define the folder directory on the source system where Secure Transfers will move the file after a successful transfer. Secure Transfers will append a timestamp to the file name to avoid conflicts. Ensure the archive folder is not a subdirectory of the source folder.",
        "●	Click Save.",
      ],
      image: "pullinterfacepartners.png",
    },
    PushInterfacefromPartners: {
      heading: "Steps to Configure a Push Interface from the Partners Tab",
      paragraphs: [
        "1.	Log in to the Secure Transfers Admin UI:",
        "● Navigate to the project instance.",
        "2.	Access the Partners Tab:",
        "●	Click on the Partners tab.",
        "●	Select the partner from whom you want to push files to.",
        "●	Click on  “+push”  button to open the transfer push configuration tab.",
        "3.	Select the target partner from the drop-down menu in the Target Partner field.",
        "4.	Select the push interface from the drop-down menu.",
        "5.	Select the target folder where you want the files to be pushed.",
        "6.	Click on ‘Save’.",
      ],
      image: "pushinterfacepartners.png",
    },
    transferGroups: {
      heading: "Transfer Groups in SecureTransfers",
      image1: "transfersgroup1.png",
      paragraphs: [
        "Transfer Groups in SecureTransfers are designed to organize and manage the sequential transmission of files that are related or dependent on each other within a workflow. This feature is vital for maintaining the integrity and order of processes where the sequence of file delivery impacts the outcome.",
        "Managing Transfer Groups in SecureTransfers:",
        "Transfer Groups in SecureTransfers are designed to manage the order of file transmissions to a target system, ensuring that related files are processed in a specified sequence. This feature is crucial for workflows requiring the orderly processing of interdependent files.",
        "Creating a Transfer Group on a Partner",
        "Steps to Create a Transfer Group:",
        "●	Access SecureTransfers Admin UI: Log in with your administrative credentials.",
        "●	Select the Project Instance: Choose the relevant project from the dashboard.",
        "●	Navigate to the Partners Tab: Select 'Partners' under the Secure Automation.",
        "●	Select the Target Partner: Identify and choose the partner for which you wish to create a transfer group and click on the host protocol.",
        "●	Open the Transfer Groups Tab: Click on 'Transfer Groups' to access or create new groups.",
        "●	Enter Transfer Group Name: Provide a descriptive name that encapsulates the association of the files within the group.",
      ],
      image: "transfersgroup.png",
    },
    SettingTGSendOrder: {
      heading: "Setting Transfer Group Send Order",
      paragraphs: [
        "Steps to Set Transfer Group Send Order:",
        "1.	Access the Partners Tab: Return to the 'Partners' tab and select the desired partner.",
        "2.	Edit the Interface: Find 'Interfaces sent to this partner' and click 'Edit Icon' for the appropriate interface.",
        "3.	Navigate to the Transfer Group Tab: Open the 'Transfer Group' tab within the interface settings.",
        "4.	Select the Transfer Group: From the 'Transfer Group Name' dropdown, choose the relevant group.",
        "5.	Enter Send Order: Clearly specify the order in which files should be dispatched (e.g., '1' for primary documents, '2' for supplementary documents).",
        "6.	Save the Configuration: Confirm the settings by clicking 'Save'.",
        "Configuration Example",
        "●	Project Instance: Access your specific project.",
        "●	Partner Selection: Opt for 'Partner_X' for modifications.",
        "●	Transfer Group Setup: In 'Transfer Groups', type 'ReportGroup' for the name, and save.",
        "●	Send Order Configuration: Link the files to 'ReportGroup', assigning a send order starting with the most critical documents.",
        "Key Difference from Sequential Order",
        "Sequential Order refers to the automatic processing of files in the order they are listed by the system, typically alphabetically or by creation date, without user-specified priorities. It is generally used when the files are independent of each other but need to be processed in a natural sequence.",
        "Transfer Groups, conversely, allow for the explicit grouping and ordering of files that must be processed together in a specified sequence. This feature is particularly useful in complex workflows where the processing of one file depends on the successful transfer of another, such as a software application requiring specific configuration files before main executable files.",
      ],
    },
    MONITORING: {
      heading: "Monitoring File Transfers for SecureTransfers",
      paragraphs: [
        "SecureTransfers is meticulously designed to offer comprehensive monitoring of file transaction activities. This ensures that administrators can oversee every detail of the transactions and take necessary actions promptly. Here’s a detailed guide to effectively using the monitoring features of SecureTransfers.",
      ],
    },
    definefilefilter: {
      heading: "Defining a File Transaction Filter",
      paragraphs: [
        "To narrow down your search results to specific criteria such as timespan, interface, partner, or status, follow these steps:",
        "1.	Access SecureTransfers Admin UI: Log into the admin UI of SecureTransfers.",
        "2.	Select the Project Instance: Choose the specific project you want to monitor.",
        "3.	Navigate to the Recent Transaction Tab: Click on the Recent Transactions tab to access file transaction records.",
        "4.	Define a Filter: In the Received section, click the filter button. Set the filter based on:",
        "●	Timespan: Select from predefined time periods or specify a custom date range to focus on specific transactions.", 
      ],
      image2: "filetimespan.png",
      paragraphs2: [
        "●	State: Choose specific states like Done, Waiting, Bad, or leave it blank to include all transactions. This helps in identifying transactions based on their completion status.",
      ],
      image: "definefilestate.png",
      paragraphs1: [
        "●	Interface: Enter a partial or complete interface name to filter event log entries related to specific interfaces.",
        "●	File Name: Provide a partial or complete file name to find transactions involving particular files.",
        "●	Partner: Select a specific partner or leave it blank to include all partners. This helps in focusing on transactions involving certain partners.",
      ],
      image3: "definepartner.png",
    },
    viewfile: {
      heading: "Viewing File Transaction Details",
      paragraphs: [
        "To view detailed information for any file transaction:",
        "1.	Identify Specific Transactions: Use the defined filter to narrow down the list to relevant transactions.",
        "2.	Select a Transaction: Click on the File Name link of the desired transaction in the results list.",
        "3.	View Message: Check the message generated for the transaction in the Message field to understand the transaction's outcome and details.",
        "4.	Detailed Information: Review the detailed information available in the Transaction Details section, including:",
        "●	State: Indicates whether the transfer was successful or unsuccessful.",
        "●	Project Name: The name of the project associated with the transaction.",
        "●	Interface: The interface used for the file transaction.",
        "●	File Name: The name of the file that was transferred.",
        "●	From: The partner who initiated the file transfer.",
        "●	To: The partner who received the file transfer.",
        "●	Received at: The date and time when the file was received.",
        "●	Sent at: The date and time when the file was sent.",
        "●	Send Tries: The number of attempts made to send the file.",
        "●	Last Send Try: The date and time of the last send attempt.",
        "●	Sequence Number: The sequence number of the file transfer.",
        "●	Number of Rows: The number of rows in the file.",
        "●	Message: The message generated for the transaction, providing additional details or errors encountered.",
      ],
      image: "viewfiledetails.png",
    },
    downloadfile: {
      heading: "Downloading Received File Transactions",
      paragraphs: [
        "To download a received file transaction:",
        "1.	Filter Transactions: Use the defined filter to find specific transactions.",
        "2.	Select a Transaction: Click on the File Name link of the desired transaction.",
        "3.	View Message: Review the message generated for the transaction in the Message field.",
        "4.	Download Transaction: Click the Download button to download the file associated with the transaction.",
      ],
    },
    viewpartner: {
      heading: "Viewing Partner Activities",
      paragraphs: [
        "To view activities associated with a specific partner:",
        "1.	Access Project Instance: In SecureTransfers Admin UI, select the project instance you want to monitor.",
        "2.	Navigate to Projects: Click the Projects button.",
        "3.	Application Log Tab: Go to the Application Log tab to view detailed logs.",
        "4.	View Details: Click on a file name to view the detailed activities associated with that partner.",
      ],
      image: "viewpartneract.png",
      paragraphs1: [
        "Note: Log files are typically deleted after 35 days, but this retention period can be adjusted through extended settings.",
      ],
    },
    downloadpartner: {
      heading: "Downloading Partner Application Log Files",
      paragraphs: [
        "To download a partner application log file:",
        "1.	Select Project Instance: Choose the project instance in the Admin UI.",
        "2.	Navigate to Projects: Click the Projects button and go to the Application Log tab.",
        "3.	View Details: Click on a file name to view the details.",
        "4.	Download Log File: Click the Download button to download the log file.",
      ],
      image: "downloadpartner.png",
      paragraphs1: [
        "Note: Log files are compressed before being sent to the browser client to ensure efficient transfer and storage.",
      ],
    },
    viewpartnerstats: {
      heading: "Viewing Partner Statistics",
      paragraphs: [
        "To view statistics related to partner activities:",
        "1.	Select Project Instance: Choose the project instance in the Admin UI.",
        "2.	Navigate to Projects: Click the Projects button and go to the Application Log tab.",
        "3.	View Statistics: Click on a file name to view detailed statistics of file transactions sent to or pulled from the partner.",
      ],
      image: "viewpartnerstats.png",
    },
    DocStatus: {
      heading: "Document Status Overview",
      paragraphs: [
        "Understand the different states of document statuses to effectively monitor the transactions:",
        "●	Done: Successfully delivered.",
        "●	Waiting: Waiting for acknowledgement from the target.",
        "●	No: Not yet delivered.",
        "●	UNZ: Unzipped for further processing.",
        "●	TBU: To be unzipped.",
        "●	Bad: Error encountered.",
        "●	Unrecognized: No matching interface found.",
      ],
    },
    ActionButtons: {
      heading: "Action Buttons",
      paragraphs: [
        "Take specific actions on file transactions using the action buttons:",
        "1.	Access Recent Transaction Tab: Select the project instance and navigate to the Recent Transaction tab.",
        "2.	Select Transactions: Choose the file transaction(s) from the results list.",
        "3.	Choose Action: Select an appropriate action:",
        "●	Reprocess: To reprocess the transaction.",
        "●	Mark as Done: To mark the transaction as processed.",
        "●	Delete: To permanently remove the transaction.",
        "4.	Confirm Action: In the confirmation dialog, click YES to proceed with the selected action.",
      ],
    },
    reprocessingfile: {
      heading: "Reprocessing Unrecognized File Transactions",
      paragraphs: [
        " To handle unrecognized files that don't match any defined interfaces:",
        "●	Access Unrecognized Tab: Select the project instance and go to the Unrecognized tab.",
        "●	Select Transactions: Choose the file transaction(s) from the results list.",
        "●	Take Action: Choose to reprocess or delete the transaction(s).",
        "●  Confirm Action: In the confirmation dialog, click YES to proceed.",
        "For renaming and reprocessing:",
        "●	Select Transaction: Choose the unrecognized file transaction.",
        "●	Rename File: Enter the new filename in the provided field.",
        "●	Reprocess: Click Rename & Reprocess to reprocess the file with the new name.",
        "By leveraging these comprehensive monitoring and management features, SecureTransfers ensures the highest level of security, efficiency, and control over all file transfer activities within your organization.",
      ],
    },
  };

 
  const TabbedParagraph = ({
    text,
    isTabbed,
    searchTerm,
    highlightSearchTerm,
  }) => {
    const style = {
      paddingLeft: isTabbed ? "2em" : "0",
    };

    return <p style={style}>{highlightSearchTerm(text, searchTerm)}</p>;
  };

  const highlightSearchTerm = (text, term) => {
    if (!term) return text;
    const parts = text.split(new RegExp(`(${term})`, "gi"));
    return (
      <>
        {parts.map((part, index) => (
          <span
            key={index}
            className={
              part.toLowerCase() === term.toLowerCase() ? "highlight" : ""
            }
          >
            {part}
          </span>
        ))}
      </>
    );
  };

  const renderContent = (selectedItem) => {
    const itemContent = content[selectedItem];
    if (!itemContent) return null;

    return (
      <div>

        {itemContent.heading && <h2>{itemContent.heading}</h2>}
        {itemContent.image1 && (
          <img src={itemContent.image1} alt={itemContent.heading} />
        )}
        {itemContent.paragraphs &&
          itemContent.paragraphs.length > 0 &&
          itemContent.paragraphs.map((paragraph, index) => (
            <TabbedParagraph
              key={index}
              text={paragraph}
              isTabbed={paragraph.startsWith("●")}
              searchTerm={searchTerm}
              highlightSearchTerm={highlightSearchTerm}
            />
          ))}
        {itemContent.image2 && (
          <img
            src={itemContent.image2}
            alt={itemContent.heading}
            className="content-image"
          />
        )}
        {itemContent.paragraphs2 &&
          itemContent.paragraphs2.length > 0 &&
          itemContent.paragraphs2.map((paragraph, index) => (
            <TabbedParagraph
              key={index}
              text={paragraph}
              isTabbed={paragraph.startsWith("●")}
              searchTerm={searchTerm}
              highlightSearchTerm={highlightSearchTerm}
            />
          ))}

        {itemContent.bulletPoints && (
          <ul>
            {itemContent.bulletPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        )}
        {itemContent.homeimage && (
          <img
            src={itemContent.homeimage}
            alt={itemContent.heading}
            className="content-homeimage"
          />
        )}

        {itemContent.image && (
          <img
            src={itemContent.image}
            alt={itemContent.heading}
            className="content-image"
          />
        )}

        {itemContent.paragraphs1 &&
          itemContent.paragraphs1.length > 0 &&
          itemContent.paragraphs1.map((paragraph, index) => (
            <TabbedParagraph
              key={index}
              text={paragraph}
              isTabbed={paragraph.startsWith("●")}
              searchTerm={searchTerm}
              highlightSearchTerm={highlightSearchTerm}
            />
          ))}

        {itemContent.image3 && (
          <img
            src={itemContent.image3}
            alt={itemContent.heading}
            className="content-image"
          />
        )}
        <Footer />
      </div>
    );
  };
  return (
    <div
      className="main-content"
      style={{ marginLeft: isSidebarCollapsed ? "4%" : "20%" }}
    >
      {renderContent(selectedItem)}
    </div>
  );
}

export default MainContent;
