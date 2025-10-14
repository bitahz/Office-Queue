import { useEffect , useState } from "react";
import React from "react";
import CustomRippleButton from "@/components/customButton";
import { useNavigate } from "react-router-dom";
import { ConfirmRoleDialog } from "@/components/customDialog";

const HomePage = () => {

  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<{ name: string; path: string } | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleButtonClick = (name: string, path: string) => {
    setSelectedRole({ name, path });
    setDialogOpen(true);
  };

  const handleConfirm = () => {
    if (selectedRole) {
      navigate(selectedRole.path);
    }
    setDialogOpen(false);
  };

  return (
    <div style={{ padding: "2rem" }}>
      {loading ? (
        <div className="flex justify-center py-12">
          <div className="text-muted-foreground">Loading...</div>
        </div>
      ) : (
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <header className="text-center mb-12 space-y-4">
             <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Select the type of user
             </h1>
          </header>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px',
              marginTop: '40px'
            }}
          >
            <CustomRippleButton onClick={() => handleButtonClick("User", "/tickets")}>
              User
            </CustomRippleButton>
            <CustomRippleButton onClick={() => handleButtonClick("Officer", "/officer")}>
              Officer
            </CustomRippleButton>
            {/*
            <CustomRippleButton onClick={() => handleButtonClick("Manager", "/manager")}>
              Manager
            </CustomRippleButton>
            <CustomRippleButton onClick={() => handleButtonClick("Administrator", "/administrator")}>
             Administrator
            </CustomRippleButton>
            */}
            <ConfirmRoleDialog
               open={dialogOpen}
               roleName={selectedRole?.name || ""}
               onClose={() => setDialogOpen(false)}
               onConfirm={handleConfirm}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;