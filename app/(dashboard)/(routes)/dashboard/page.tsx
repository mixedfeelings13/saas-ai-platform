import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
    return (
      <div>
        <p>Dashboard page (protected) </p>
        <UserButton afterSignOutUrl="/"/>
      </div>
    )
}

export default DashboardPage;
