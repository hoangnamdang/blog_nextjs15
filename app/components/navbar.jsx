"use client";
import { AppBar, Box, Stack, Toolbar, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/next.svg";
import { createClient } from "../../utils/supabase/client";
import { PATHS } from "../constant/paths";
import ButtonLogin from "./form/button-login";
import ButtonLogout from "./form/button-logout";
import ButtonSignup from "./form/button-signup";
import { useEffect, useState } from "react";
export default function Navbar() {
  const [user, setUser] = useState("");
  useEffect(() => {
    (async () => {
      const supabase = await createClient();
      const { data } = await supabase.auth.getUser();
      setUser(data?.user?.email || "");
    })();
  }, []);
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
            {user && (
              <>
                <Typography>Hello: {user}</Typography>
                <ButtonLogout />
              </>
            )}
            {!user && (
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
