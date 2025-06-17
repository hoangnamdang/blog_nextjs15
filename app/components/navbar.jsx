import { AppBar, Box, Stack, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/next.svg";
import { createClient } from "../../utils/supabase/server";
import { PATHS } from "../constant/paths";
import ButtonLogin from "./form/button-login";
import ButtonLogout from "./form/button-logout";
import ButtonSignup from "./form/button-signup";
export default async function Navbar() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  return (
    <Box mb={1} sx={{ borderBottom: "1px solid gray" }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Box style={{ flexGrow: 1 }}>
            <Image src={logo} width={100} height={100} alt="logo" />
          </Box>

          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={2}
          >
            {PATHS.map((item, idx) => {
              return (
                <Link key={idx} href={item.url}>
                  {item.name}
                </Link>
              );
            })}
            {data?.user?.email && (
              <>
                <Typography>Hello: {data?.user?.email}</Typography>
                <ButtonLogout />
              </>
            )}
            {!data?.user?.email && (
              <>
                <ButtonLogin />
                <ButtonSignup />
              </>
            )}
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
