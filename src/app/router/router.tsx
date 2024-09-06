import { createBrowserRouter } from "react-router-dom";
import Layout from "../../widgets/Layout/Layout";
import NotFound from "../../widgets/NotFound/NotFound";
import HomePage from "../../pages/HomePage/HomePage";
import Filters from "../../features/Filters/ui/Filters";
import CompanyPage from "../../pages/AboutCompany/CompanyPage";
import InfoPage from "../../pages/InfoPage/InfoPage";
import AdminLayout from "../../widgets/Layout/AdminLayout";
import AdminMainDashboard from "../../features/AdminMainDashboard/AdminMainDashboard";
import AdminRealEstate from "../../features/AdminRealEstate/AdminRealEstate";
import AdminHeadings from "../../features/AdminHeadings";
import AdminSettings from "../../features/AdminSettings/AdminSettings";
import SignIn from "../../features/Sign-In/Sign-In";
import PenModal from "../../features/AdminRealEstate/components/PenModal";
import AddHeading from "../../features/AdminHeadings/ui/AddHeading";
import DeleteModal from "../../shared/helpers/DeleteModal";
import ProtectedRoute from "../../shared/helpers/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/watch",
        element: <Filters />,
      },
      {
        path: "/AboutCompany",
        element: <CompanyPage />,
      },
      {
        path: "/info/:id",
        element: <InfoPage />,
      },
    ],
  },
  {
    path: "/admin/sign-in",
    element: <SignIn />,
  },
  {
    path: "admin",
    element: (
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <AdminMainDashboard />,
      },
      {
        path: "headings",
        element: <AdminHeadings />,
        children: [
          {
            path: "add",
            element: <AddHeading />,
          },
          {
            path: "edit/:headingId",
            element: <AddHeading />,
          },
          {
            path: "delete/:headingId",
            element: <DeleteModal />,
          },
        ],
      },
      {
        path: "real-estate",
        element: <AdminRealEstate />,
        children: [
          {
            path: "add",
            element: <PenModal />,
          },
          {
            path: "edit/:houseId",
            element: <PenModal />,
          },
        ],
      },
      {
        path: "settings",
        element: <AdminSettings />,
      },
    ],
  },
]);
