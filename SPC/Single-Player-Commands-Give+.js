/**
 *  ________ ________ ________
 * |        |   __   |        |
 * |   _____|  |  |  |    ____|________ __    __ __    __ ________ __    __ _______  ________
 * |        |  |__|  |   |    |   __   |   \/   |   \/   |   __   |   \ |  |   __  \|        |
 * |_____   |   _____|   |____|  |  |  |        |        |  |__|  |    \|  |  |  \  |   -----:
 * |        |  |     |        |  |__|  |  |\/|  |  |\/|  |   __   |  |\    |  |__/  :-----   |
 * |________|__|     |________|________|__|  |__|__|  |__|__|  |__|__| \ __|_______/|________|
 *
 * Single Player Commands Give+
 * Made by Connor4898 & CheesyFriedBacon
 * Sprint script made by WhyToFu, modified by Connor4898 (Used with permission)
 * The entity command is based from the entity manager in MrARM's TMI. Thanks MrARM!
 *
 * © Copyright 2013 Connor4898 & CheesyFriedBacon
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
*/

var setHomeData = 0, bombMode = 0, bombSet = 0, portableDoorMode = 0, portableDoorActive = 0, pDoor, pDoor1, magicCarpet = 0, magicCarpetTick = 0, sprintMode = 0, Xpos = 0, Zpos = 0, sprintTick = 1, Xdiff = 0, Zdiff = 0, countdownMode = 0, countdown = 0, spawnTouch = 0, spawnMobID = null, instabreakMode = 0, instabreakBlock, warpMode = 0, nextYaw = 0, panoramaMode = 0, panoramaSpeed = 0, panCountdown = 0, msg, msgTick = 100, TNTCannonActive = 0, mobCannonActive = 0, cannonCountdown = 0, cannonMob, cannonMobID = 0, cannonPlayerPitch = 0, cannonPlayerYaw = 0, cannonVelX = 0, cannonVelY = 0, cannonVelZ = 0, cannonRapidMode = 0, cannonRapidCountdown = 0, pearlActive = 0, snowballThrown = 0, snowball, pearlCountdown = 0, snowballX, snowballY, snowballZ, evalMsg = "", entities = [], entityCount = 0;
var MobIDs = {
	"chicken": 10,
	"cow": 11,
	"pig": 12,
	"sheep": 13,
	"zombie": 32,
	"creeper": 33,
	"skeleton": 34,
	"spider": 35,
	"zombiepigman": 36,
	"zombie_pigman": 36,
	"pigzombie": 36,
	"pigman": 36
};

function useItem(x,y,z,itemId,blockId) {
	if(bombMode == 1) {
		if((itemId == 280) || (itemId == 267)) {//stick or Iron sword
			bombX = x;
			bombY = y;
			bombZ = z;
			bombSet = 1;
			colourChat("Set bomb at x: " + bombX + " y: " + bombY + " z: " + bombZ);
		}
	}

	if(portableDoorMode == 1) {
		if((itemId == 280) || (itemId == 292)) {//stick or Iron hoe
			ModPE.saveData("pDoorX",parseInt(x));
			ModPE.saveData("pDoorY",parseInt(y));
			ModPE.saveData("pDoorY1",parseInt(y) + 1);
			ModPE.saveData("pDoorZ",parseInt(z));
			ModPE.saveData("portableDoorSet",1);
			colourChat("Portable Door set to x: " + ModPE.readData("pDoorX") + " y: " + ModPE.readData("pDoorY") + "/" + ModPE.readData("pDoorY1") + " z: " + ModPE.readData("pDoorZ"));
		}
	}

	if(spawnTouch == 1) {
		if(spawnMobID != null) {
			Level.spawnMob(x+0.5,y+2,z+0.5,spawnMobID);
		}
	}

	if(instabreakMode == 1) {
		if(itemId == 285) {//Gold pickaxe
			instabreakBlock = Level.getTile(x,y,z);
			if(instabreakBlock != 1 && instabreakBlock != 2 && instabreakBlock != 7 && instabreakBlock != 16 && instabreakBlock != 18 && instabreakBlock != 20 && instabreakBlock != 21 && instabreakBlock != 30 && instabreakBlock != 31 && instabreakBlock != 43 && instabreakBlock != 47 && instabreakBlock != 56 && instabreakBlock != 59 && instabreakBlock != 60 && instabreakBlock != 62 && instabreakBlock != 63 && instabreakBlock != 64 && instabreakBlock != 68 && instabreakBlock != 71 && instabreakBlock != 73 && instabreakBlock != 74 && instabreakBlock != 78 && instabreakBlock != 79 && instabreakBlock != 82 && instabreakBlock != 83 && instabreakBlock != 89 && instabreakBlock != 95 && instabreakBlock != 102 && instabreakBlock != 103 && instabreakBlock != 105 && instabreakBlock != 157 && instabreakBlock != 246) {
				Player.addItemInventory(instabreakBlock,1);
			} if(instabreakBlock == 1) {
				Player.addItemInventory(4,1);
			} if(instabreakBlock == 2) {
				Player.addItemInventory(3,1);
			} if(instabreakBlock == 16) {
				Player.addItemInventory(263,1);
			} if(instabreakBlock == 43) {
				Player.addItemInventory(44,2);
			} if(instabreakBlock == 47) {
				Player.addItemInventory(340,3);
			} if(instabreakBlock == 56) {
				Player.addItemInventory(264,1);
			} if(instabreakBlock == 60) {
				Player.addItemInventory(3,1);
			} if(instabreakBlock == 62) {
				Player.addItemInventory(61,1);
			} if(instabreakBlock == 63) {
				Player.addItemInventory(323,1);
			} if(instabreakBlock == 64) {
				Player.addItemInventory(324,1);
			} if(instabreakBlock == 68) {
				Player.addItemInventory(323,1);
			} if(instabreakBlock == 78) {
				Player.addItemInventory(332,1);
			} if(instabreakBlock == 82) {
				Player.addItemInventory(337,3);
			} if(instabreakBlock == 83) {
				Player.addItemInventory(338,1);
			} if(instabreakBlock == 89) {
				Player.addItemInventory(348,3);
			} if(instabreakBlock == 157) {
				Player.addItemInventory(158,2);
			} if(instabreakBlock == 103) {
				Player.addItemInventory(360,4);
			} if(instabreakBlock == 246) {
				Player.addItemInventory(49,1);
			} if(instabreakBlock != 7) {
				Level.setTile(x,y,z,0);
			}
		}
	}

	if(warpMode == 1) {
		if(itemId == 341 || itemId == 267) {//Slimeball or Iron sword
			if(Level.getTile(Player.getX(),Player.getY()-2,Player.getZ()) == 57) {
				if(Math.floor(Player.getX()) == ModPE.readData("warpA2X") && Math.floor(Player.getY()) - 2 == ModPE.readData("warpA2Y") && Math.floor(Player.getZ()) == ModPE.readData("warpA2Z")) {
					if(ModPE.readData("warpSetA1") == 1) {
						Entity.setPosition(Player.getEntity(), parseInt(ModPE.readData("warpA1X")) + 0.5, parseInt(ModPE.readData("warpA1Y")) + 3, parseInt(ModPE.readData("warpA1Z")) + 0.5);
					}
				} if(Math.floor(Player.getX()) == ModPE.readData("warpA1X") && Math.floor(Player.getY()) - 2 == ModPE.readData("warpA1Y") && Math.floor(Player.getZ()) == ModPE.readData("warpA1Z")) {
					if(ModPE.readData("warpSetA2") == 1) {
						Entity.setPosition(Player.getEntity(), parseInt(ModPE.readData("warpA2X")) + 0.5, parseInt(ModPE.readData("warpA2Y")) + 3, parseInt(ModPE.readData("warpA2Z")) + 0.5);
					}
				}
			} if(Level.getTile(Player.getX(),Player.getY()-2,Player.getZ()) == 41) {
				if(Math.floor(Player.getX()) == ModPE.readData("warpB2X") && Math.floor(Player.getY()) - 2 == ModPE.readData("warpB2Y") && Math.floor(Player.getZ()) == ModPE.readData("warpB2Z")) {
					if(ModPE.readData("warpSetB1") == 1) {
						Entity.setPosition(Player.getEntity(), parseInt(ModPE.readData("warpB1X")) + 0.5, parseInt(ModPE.readData("warpB1Y")) + 3, parseInt(ModPE.readData("warpB1Z")) + 0.5);
					}
				} if(Math.floor(Player.getX()) == ModPE.readData("warpB1X") && Math.floor(Player.getY()) - 2 == ModPE.readData("warpB1Y") && Math.floor(Player.getZ()) == ModPE.readData("warpB1Z")) {
					if(ModPE.readData("warpSetB2") == 1) {
						Entity.setPosition(Player.getEntity(), parseInt(ModPE.readData("warpB2X")) + 0.5, parseInt(ModPE.readData("warpB2Y")) + 3, parseInt(ModPE.readData("warpB2Z")) + 0.5);
					}
				}
			} if(Level.getTile(Player.getX(),Player.getY()-2,Player.getZ()) == 42) {
				if(Math.floor(Player.getX()) == ModPE.readData("warpC2X") && Math.floor(Player.getY()) - 2 == ModPE.readData("warpC2Y") && Math.floor(Player.getZ()) == ModPE.readData("warpC2Z")) {
					if(ModPE.readData("warpSetC1") == 1) {
						Entity.setPosition(Player.getEntity(), parseInt(ModPE.readData("warpC1X")) + 0.5, parseInt(ModPE.readData("warpC1Y")) + 3, parseInt(ModPE.readData("warpC1Z")) + 0.5);
					}
				} if(Math.floor(Player.getX()) == ModPE.readData("warpC1X") && Math.floor(Player.getY()) - 2 == ModPE.readData("warpC1Y") && Math.floor(Player.getZ()) == ModPE.readData("warpC1Z")) {
					if(ModPE.readData("warpSetC2") == 1) {
						Entity.setPosition(Player.getEntity(), parseInt(ModPE.readData("warpC2X")) + 0.5, parseInt(ModPE.readData("warpC2Y")) + 3, parseInt(ModPE.readData("warpC2Z")) + 0.5);
					}
				}
			} if(Level.getTile(Player.getX(),Player.getY()-2,Player.getZ()) == 22) {
				if(Math.floor(Player.getX()) == ModPE.readData("warpD2X") && Math.floor(Player.getY()) - 2 == ModPE.readData("warpD2Y") && Math.floor(Player.getZ()) == ModPE.readData("warpD2Z")) {
					if(ModPE.readData("warpSetD1") == 1) {
						Entity.setPosition(Player.getEntity(), parseInt(ModPE.readData("warpD1X")) + 0.5, parseInt(ModPE.readData("warpD1Y")) + 3, parseInt(ModPE.readData("warpD1Z")) + 0.5);
					}
				} if(Math.floor(Player.getX()) == ModPE.readData("warpD1X") && Math.floor(Player.getY()) - 2 == ModPE.readData("warpD1Y") && Math.floor(Player.getZ()) == ModPE.readData("warpD1Z")) {
					if(ModPE.readData("warpSetD2") == 1) {
						Entity.setPosition(Player.getEntity(), parseInt(ModPE.readData("warpD2X")) + 0.5, parseInt(ModPE.readData("warpD2Y")) + 3, parseInt(ModPE.readData("warpD2Z")) + 0.5);
					}
				}
			}
		} if(itemId == 293 || itemId == 292) {//Diamond hoe or Iron hoe
			if(blockId == 57) {
				ModPE.saveData("warpSetA1",1);
				ModPE.saveData("warpA1X",parseInt(x));
				ModPE.saveData("warpA1Y",parseInt(y));
				ModPE.saveData("warpA1Z",parseInt(z));
				colourChat("A1 set!");
			} if(blockId == 41) {
				ModPE.saveData("warpSetB1",1);
				ModPE.saveData("warpB1X",parseInt(x));
				ModPE.saveData("warpB1Y",parseInt(y));
				ModPE.saveData("warpB1Z",parseInt(z));
				colourChat("B1 set!");
			} if(blockId == 42) {
				ModPE.saveData("warpSetC1",1);
				ModPE.saveData("warpC1X",parseInt(x));
				ModPE.saveData("warpC1Y",parseInt(y));
				ModPE.saveData("warpC1Z",parseInt(z));
				colourChat("C1 set!");
			} if(blockId == 22) {
				ModPE.saveData("warpSetD1",1);
				ModPE.saveData("warpD1X",parseInt(x));
				ModPE.saveData("warpD1Y",parseInt(y));
				ModPE.saveData("warpD1Z",parseInt(z));
				colourChat("D1 set!");
			}
		} if(itemId == 294 || itemId == 261) {//Gold hoe or Bow
			if(blockId == 57) {
				ModPE.saveData("warpSetA2",1);
				ModPE.saveData("warpA2X",parseInt(x));
				ModPE.saveData("warpA2Y",parseInt(y));
				ModPE.saveData("warpA2Z",parseInt(z));
				colourChat("A2 set!");
			} if(blockId == 41) {
				ModPE.saveData("warpSetB2",1);
				ModPE.saveData("warpB2X",parseInt(x));
				ModPE.saveData("warpB2Y",parseInt(y));
				ModPE.saveData("warpB2Z",parseInt(z));
				colourChat("B2 set!");
			} if(blockId == 42) {
				ModPE.saveData("warpSetC2",1);
				ModPE.saveData("warpC2X",parseInt(x));
				ModPE.saveData("warpC2Y",parseInt(y));
				ModPE.saveData("warpC2Z",parseInt(z));
				colourChat("C2 set!");
			} if(blockId == 22) {
				ModPE.saveData("warpSetD2",1);
				ModPE.saveData("warpD2X",parseInt(x));
				ModPE.saveData("warpD2Y",parseInt(y));
				ModPE.saveData("warpD2Z",parseInt(z));
				colourChat("D2 set!");
			}
		}
	} if(cannonRapidMode == 1 && Level.getGameMode() == 0) {
		colourChat("Rapid fire deactivated");
		TNTCannonActive = 0;
		mobCannonActive = 0;
		cannonRapidMode = 0;
	}
}

function procCmd(c) {
	var p = c.split(" ");
	var command = p[0];
	switch(command.toLowerCase()) {
		case 'commands': {
			clientMessage("[SPC] Type /help");
			break;
		} case 'help': {
			switch(p[1]) {
				case 'ascend': {
					clientMessage("[SPC] [HELP] Type /ascend to teleport to the platform above you.\nExample: /ascend");
					break;
				} case 'bomb': {
					clientMessage("[SPC] [HELP] Type /bomb <on|off|detonate>. Use a Stick or Iron sword as the bomb setter, when Bomb Mode is on. WARNING: May be explosive!\n Example: /bomb on");
					break;
				} case 'bounce': {
					clientMessage("[SPC] [HELP] Type /bounce <power> to get launched into the air\nExample: /bounce 2");
					break;
				} case 'coords': {
					clientMessage("[SPC] [HELP] Type /coords to get the current coordinates at your feet.\nExample: /coords");
					break;
				} case 'delhome': {
					clientMessage("[SPC] [HELP] Type /delhome to delete your current home coordinates.\nExample: /delhome");
					break;
				} case 'descend': {
					clientMessage("[SPC] [HELP] Type /descend to teleport to the platform below you.\nExample: /descend");
					break;
				} case 'enderpearl': {
					clientMessage("[SPC] [HELP] Type /enderpearl <on|off> while holding an egg in creative mode to activate/deactivate ender pearls.\nExample: /enderpearl on");
					break;
				} case 'entity': {
					clientMessage("[SPC] [HELP] Type /entity <kill|remove|burn|explode> <MobName|all> to remove/burn/explode the specified entities.\nExample: /entity burn all");
				} case 'eval': {
					clientMessage("[SPC] [HELP] Type /eval <code> to run a script in game!\nExample: /eval clientMessage(\"Hello world!\");");
					break;
				} case 'explode': {
					clientMessage("[SPC] [HELP] Type /explode <radius> to blow up. WARNING: It may hurt/nExample: /explode 5");
					break;
				} case 'gamemode': {
					clientMessage("[SPC] [HELP] Type /gamemode <survival|creative|0|1> to change your current gamemode. NOTE: Clears your survival inventory");
					break;
				} case 'give': {
					clientMessage("[SPC] [HELP] Type /give <Name|ID> <amount> to add any item to your inventory.\nExample: /give 57 64");
					break;
				} case 'heal': {
					clientMessage("[SPC] [HELP] Type /heal or /heal <Half-hearts> to set your health to the specified amount.\nExample: /heal 20");
					break;
				} case 'hole': {
					clientMessage("[SPC] [HELP] Type /hole to commit suicide. WARNING: USE WITH CAUTION!\n Example: /hole");
					break;
				} case 'home': {
					clientMessage("[SPC] [HELP] Type /home to tp to your home (Use /sethome first)\nExample: /home");
					break;
				} case 'ignite': {
					clientMessage("[SPC] [HELP] Type /ignite or /ignite <seconds> to set you on fire. WARNING: High chance of being burnt.\nExample: /ignite 3");
					break;
				} case 'instabreak': {
					clientMessage("[SPC] [HELP] Type /instabreak <on|off> to turn InstaBreak on or off.\nExample: /instabreak on");
					break;
				} case 'launch': {
					clientMessage("[SPC] [HELP] Type /launch <MobName|tnt> <rapid> to launch a mob or tnt in the direction you are facing!");
					break;
				} case 'kill': {
					clientMessage("[SPC] [HELP] Type /kill to kill yourself");
					break;
				} case 'mc': {
					clientMessage("[SPC] [HELP] Type /mc <on|off> to activate or deactivate the Magic Carpet.\nExample: /mc on");
					break;
				} case 'nuke': {
					clientMessage("[SPC] [HELP] Type /nuke to cause a MAHOOSIVE explosion!\nExample: /nuke");
					break;
				} case 'panorama': {
					clientMessage("[SPC] [HELP] Type /panorama <on|off> to activate or deactivate Panorama Mode.\nExample: /panorama on");
					break;
				} case 'pdoor': {
					clientMessage("[SPC] [HELP] Type /pdoor <on|off|open>. Use a stick or Iron hoe to set the position of the door.\nExample: /pdoor on");
					break;
				} case 'rain': {
					clientMessage("[SPC] [HELP] Type /rain <MobName> to make it rain animals!\nExample: /rain chicken");
					break;
				} case 'refresh': {
					clientMessage("[SPC] [HELP] Type /refresh to regain all items required for currently active commands.\nExample: /refresh");
					break;
				} case 'setitem': {
					clientMessage("[SPC] [HELP] Type /setitem <ID> to set the specified item ID to your current held item.\nExample: /setitem 264");
					break;
				} case 'sethome': {
					clientMessage("[SPC] [HELP] Type /sethome to set coordinates you can easily tp back to, using /home.\n Example: /sethome");
					break;
				} case 'spawn': {
					clientMessage("[SPC] [HELP] Type /spawn <MobName> <Amount> to spawn the specified mob.\nExample: /spawn pig 5");
					break;
				} case 'spawntouch': {
					clientMessage("[SPC] [HELP] Type /spawntouch <MobName|off> to spawn the specified mob when you tap a block.\nExample: /spawntouch chicken");
					break;
				} case 'sprint': {
					clientMessage("[SPC] [HELP] Type /sprint <on|off> to activate or deactivate Sprint Mode.\nExample: /sprint on\nOriginal Sprint Script made by WhyToFu.");
					break;
				} case 'summon': {
					clientMessage("[SPC] [HELP] Type /summon <mob> <x> <y> <z> to spawn a mob at the specified coordinates.\nExample: /summon pig 147 84 123");
					break;
				} case 'surface': {
					clientMessage("[SPC] [HELP] Type /surface to teleport to the surface above you.\nExample: /surface");
					break;
				} case 'time': {
					clientMessage("[SPC] [HELP] Type /time or /time set <sunrise|day|sunset|night|value> to get the time, or set the time to the specified time (respectively). NOTE: Does not work properly.\nExample: /time set day");
					break;
				} case 'tp': {
					clientMessage("[SPC] [HELP] Type /tp <x> <y> <z>, where x, y, and z are your desired coordinates.\n Example: /tp 128 70 128)");
					break;
				} case 'warp': {
					clientMessage("[SPC] [HELP] Type /warp <on|off> to turn Warp Panels on or off.\nExample: /warp on");
					break;
				} case '1': {
					clientMessage("Showing help page 1 of 7 (/help <page>)\n /ascend\n /bomb <on|detonate|off>\n /bounce <power>\n /coords\n /delhome");
					break;
				} case '2': {
					clientMessage("Showing help page 2 of 7 (/help <page>)\n /descend\n /enderpearl <on|off>\n /entity <method> <MobName|all>\n /eval <code>\n /explode <radius>");
					break;
				} case '3': {
					clientMessage("Showing help page 3 of 7 (/help <page>)\n /gamemode <survival|creative|0|1>\n /give <Name|ID> <amount>\n /heal <amount>\n /help <page|command>\n /hole");
					break;
				} case '4': {
					clientMessage("Showing help page 4 of 7 (/help <page>)\n /home\n /ignite <secs> \n /instabreak <on|off>\n /launch <MobName|tnt>\n /kill");
					break;
				} case '5': {
					clientMessage("Showing help page 5 of 7 (/help <page>)\n /mc <on|off>\n /nuke\n /panorama <on|off>\n /pdoor <on|open|off>\n /rain <MobName>");
					break;
				} case '6': {
					clientMessage("Showing help page 6 of 7 (/help <page>)\n /refresh\n /setitem <ID>\n /sethome\n /spawntouch <MobName|off>\n /sprint <on|off>");
					break;
				} case '7': {
					clientMessage("Showing help page 7 of 7 (/help <page>)\n /summon <mob> <x> <y> <z>\n /surface\n /time <set> <sunrise|day|sunset|night>\n /tp <x> <y> <z>\n /warp <on|off>");
					break;
				} default: {
					clientMessage("Showing help page 1 of 7 (/help <page>)\n /ascend\n /bomb <on|detonate|off>\n /bounce <power>\n /coords\n /delhome");
					break;
				}
			}
			break;

		} case 'ascend': {
			for(i=1;i<=128;i++) {
				surfaceFloor = (Math.floor(Player.getY()) - 2) + i;
				if(Level.getTile(Player.getX(),surfaceFloor,Player.getZ()) != 0 && Level.getTile(Player.getX(),surfaceFloor + 1,Player.getZ()) == 0 && Level.getTile(Player.getX(),surfaceFloor + 2,Player.getZ()) == 0) {
					Entity.setPosition(Player.getEntity(),Player.getX(),surfaceFloor + 3,Player.getZ());
				}
			} colourChat("Teleported to the floor above you!");
			break;

		} case 'bomb': {
			if(p[1] == 'on') {
				if(bombMode == 1) {
					colourChat("Bomb detonation mode is already on!");
				} if(bombMode == 0) {
					bombMode = 1;
					Player.addItemInventory(280,1);
					colourChat("Bomb detonation mode has been turned on!");
				}
			} if(p[1] == 'off') {
				if(bombMode == 0) {
					colourChat("Bomb detonation mode is already off!");
				} if(bombMode == 1) {
					bombMode = 0;
					Player.addItemInventory(280,-1);
					colourChat("Bomb detonation mode has been turned off!");
				}
			} if(p[1] == 'detonate') {
				if(bombMode == 0) {
					colourChat("Bomb detonation mode is off!");
				} if(bombMode == 1) {
					if(bombSet == 0) {
						colourChat("Set a bomb first!");
				} if(bombSet == 1) {
						Level.explode(bombX, bombY, bombZ, 5);
						colourChat("Bomb detonated!");
						bombSet = 0;
					}
				}
			}
			break;

		} case 'bounce': {
			if((!p[1]) || (p[1] < 1)) {
				colourChat("Usage: /bounce <power>");
			} else if(p[1] >= 1) {
				Entity.setVelY(Player.getEntity(),parseInt(p[1]));
			} else {
				colourChat("The bounce power must be a number!");
			}
			break;

		} case 'coords': {
			clientMessage("[SPC] Current coordinates are:\nHead: x: " + Math.floor(Player.getX()) + " y: " + Math.floor(Player.getY()) + " z: " + Math.floor(Player.getZ()) + "\nFeet: x: " + Math.floor(Player.getX()) + " y: " + Math.floor(Player.getY() - 1) + " z: " + Math.floor(Player.getZ()));
			break;

		} case 'delhome': {
			if(ModPE.readData("setHomeData") == 1) {
				ModPE.saveData("setHomeData",0);
				colourChat("Home successfully deleted!");
				break;
			} if(ModPE.readData("setHomeData") == 0) {
				colourChat("No home is set!");
			}
			break;

		} case 'descend': {
			for(i=-1;i>=-128;i--) {
				surfaceFloor = (Math.floor(Player.getY()) - 2) + i;
				if(Level.getTile(Player.getX(),surfaceFloor,Player.getZ()) != 0 && Level.getTile(Player.getX(),surfaceFloor + 1,Player.getZ()) == 0 && Level.getTile(Player.getX(),surfaceFloor + 2,Player.getZ()) == 0) {
					Entity.setPosition(Player.getEntity(),Player.getX(),surfaceFloor + 3,Player.getZ());
				}
			} colourChat("Teleported to the floor beneath you!");
			break;

		} case 'enderpearl': {
		if(Level.getGameMode() == 1) {
			if(p[1] == 'on') {
				if(Player.getCarriedItem() == 344) {
					pearlActive = 1;
					Entity.setCarriedItem(Player.getEntity(),332);
					colourChat("Ender pearls activated! Throw a snowball");
				} else {
					colourChat("Hold an egg, and then type /enderpearl on");
				}
			} if(p[1] == 'off') {
				if(Player.getCarriedItem() == 332) {
					pearlActive = 0;
					Entity.setCarriedItem(Player.getEntity(),344);
					Level.setGameMode(0);
					Level.setGameMode(1);
					colourChat("Ender pearls deactivated!");
				} else {
					colourChat("Hold a snowball, and then type /enderpearl off");
				}
			}
		} else {
			clientMessage("[SPC] You need to be in creative mode!\n(Type /gamemode creative)");
		}
		break;

		} case 'entity': {
			if(p[1] && p[2]) {
				var entityMobID = MobIDs[p[2].toLowerCase()];
				var entityMethod = "";
				if(typeof(entityMobID) == "undefined" && p[2] != 'all') {
					break;
				} if(p[2] == 'all') {
					for(i=0;i<entities.length;i++) {
						if(p[1] == 'kill' || p[1] == 'remove') {
							Entity.remove(entities[i]);
							entityMethod = "Removed";
							entityCount++;
						} if(p[1] == 'burn') {
							Entity.setFireTicks(entities[i],10);
							entityMethod = "Cooked";
							entityCount++;
						} if(p[1] == 'explode') {
							if(Entity.getEntityTypeId(entities[i]) != 64) {
								explode(Entity.getX(entities[i]),Entity.getY(entities[i]),Entity.getZ(entities[i]),3);
								entityMethod = "Exploded";
								entityCount++;
							}
						}
					} if(entityMethod == 'Removed') {
						colourChat("" + entityMethod + " " + entityCount + " entities");
					} else {
						colourChat("" + entityMethod + " " + entityCount + " mobs");
					}
					entityCount = 0;
				} else {
					for(i=0;i<entities.length;i++) {
						if(Entity.getEntityTypeId(entities[i]) == entityMobID) {
							entityCount++;
							if(p[1] == 'kill' || p[1] == 'remove') {
								Entity.remove(entities[i]);
								entityMethod = "Removed";
							} if(p[1] == 'burn') {
								Entity.setFireTicks(entities[i],10);
								entityMethod = "Cooked";
							} if(p[1] == 'explode') {
								explode(Entity.getX(entities[i]),Entity.getY(entities[i]),Entity.getZ(entities[i]),3);
								entityMethod = "Exploded";
							}
						}
					}
					if(p[2] == 'sheep') {
						colourChat("" + entityMethod + " " + entityCount + " " + p[2]);
					} else {
						colourChat("" + entityMethod + " " + entityCount + " " + p[2] + "s");
					}
					entityCount = 0;
					break;
				}
			} if(!p[1]) {
				colourChat("Usage: /entity <kill|burn|explode> <MobName|all>");
			}
			break;

		} case 'eval': {
			evalMsg = "";
			for(i=1;i<=(p.length);i++) {
				evalMsg += p[i] + " ";
			} eval(evalMsg);
			break;

		} case 'explode': {
			Level.explode(Player.getX(), Player.getY(), Player.getZ(), p[1]);
			colourChat("KAPLOOEY!!!");
			break;

		} case 'gamemode': {
			if(!p[1]) {
				colourChat("Please specify a gamemode!");
				break;
			} if(p[1] == Level.getGameMode()) {
				if(p[1] == '0' || p[1] == 'survival') {
					colourChat("Gamemode is already set to survival!");
					break;
				} if(p[1] == '1' || p[1] == 'creative') {
					colourChat("Gamemode is already set to creative!");
					break;
				}
			} if(p[1] != Level.getGameMode()) {
				if(p[1] == '0' || p[1] == 'survival') {
					Level.setGameMode(0);
					colourChat("Gamemode set to survival!");
					break;
				} if(p[1] == '1' || p[1] == 'creative') {
					Level.setGameMode(1);
					colourChat("Gamemode set to creative!");
					break;
				} else {
					colourChat("Usage: /gamemode <surival|creative|0|1>");
				}
			}
			break;

		} case 'give': {
			if(p[1] == 'stone') {
				Player.addItemInventory(1,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'grass') {
				Player.addItemInventory(2,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'dirt') {
				Player.addItemInventory(3,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'cobblestone' || p[1] == 'cobble') {
				Player.addItemInventory(4,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'plank' || p[1] == 'planks' || p[1] == 'wooden_plank' || p[1] == 'wooden_planks') {
				Player.addItemInventory(5,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'sapling' || p[1] == 'saplings') {
				Player.addItemInventory(6,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'bedrock') {
				Player.addItemInventory(7,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'water') {
				Player.addItemInventory(8,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'still_water') {
				Player.addItemInventory(9,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'lava') {
				Player.addItemInventory(10,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'still_lava') {
				Player.addItemInventory(11,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'sand') {
				Player.addItemInventory(12,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'gravel') {
				Player.addItemInventory(13,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'gold_ore') {
				Player.addItemInventory(14,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'iron_ore') {
				Player.addItemInventory(15,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'coal_ore') {
				Player.addItemInventory(16,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'wood' || p[1] == 'trunk') {
				Player.addItemInventory(17,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'leave' || p[1] == 'leaves') {
				Player.addItemInventory(18,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'glass') {
				Player.addItemInventory(20,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'lapis_ore') {
				Player.addItemInventory(21,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'lapis_block') {
				Player.addItemInventory(22,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'sandstone') {
				Player.addItemInventory(24,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'bed_block') {
				Player.addItemInventory(26,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'cobweb') {
				Player.addItemInventory(30,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'tall_grass') {
				Player.addItemInventory(31,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'bush' || p[1] == 'dead_bush') {
				Player.addItemInventory(32,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'wool') {
				Player.addItemInventory(35,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'dandelion') {
				Player.addItemInventory(37,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'rose' || p[1] == 'cyan_flower') {
				Player.addItemInventory(38,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'brown_mushroom') {
				Player.addItemInventory(39,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'red_mushroom') {
				Player.addItemInventory(40,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'gold_block') {
				Player.addItemInventory(41,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'iron_block') {
				Player.addItemInventory(42,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'double_slab' || p[1] == 'double_slabs') {
				Player.addItemInventory(43,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'slab' || p[1] == 'slabs') {
				Player.addItemInventory(44,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'bricks' || p[1] == 'bricks_block') {
				Player.addItemInventory(45,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'tnt') {
				Player.addItemInventory(46,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'bookshelf') {
				Player.addItemInventory(47,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'moss_stone' || p[1] == 'mossy_stone') {
				Player.addItemInventory(48,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'obsidian') {
				Player.addItemInventory(49,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'torch') {
				Player.addItemInventory(50,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'fire') {
				Player.addItemInventory(51,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'wood_stairs' || p[1] == 'wooden_stairs') {
				Player.addItemInventory(53,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'chest') {
				Player.addItemInventory(54,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'diamond_ore') {
				Player.addItemInventory(56,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'diamond_block') {
				Player.addItemInventory(57,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'crafting_table' || p[1] == 'workbench') {
				Player.addItemInventory(58,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'wheat_block') {
				Player.addItemInventory(59,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'farmland') {
				Player.addItemInventory(60,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'furnace') {
				Player.addItemInventory(61,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'burning_furnace' || p[1] == 'lit_furnace') {
				Player.addItemInventory(62,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'sign_post') {
				Player.addItemInventory(63,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'door_block' || p[1] == 'wood_door_block' || p[1] == 'wooden_door_block') {
				Player.addItemInventory(64,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'ladder') {
				Player.addItemInventory(65,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'cobble_stairs' || p[1] == 'cobblestone_stairs') {
				Player.addItemInventory(67,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'wall_sign') {
				Player.addItemInventory(68,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'iron_door_block') {
				Player.addItemInventory(71,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'redstone_ore') {
				Player.addItemInventory(73,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'glowing_redstone_ore' || p[1] == 'lit_redstone_ore') {
				Player.addItemInventory(74,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'snow' || p[1] == 'snow_layer') {
				Player.addItemInventory(78,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'ice') {
				Player.addItemInventory(79,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'snow_block') {
				Player.addItemInventory(80,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'cactus') {
				Player.addItemInventory(81,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'clay_block') {
				Player.addItemInventory(82,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'reeds' || p[1] == 'sugarcane_block') {
				Player.addItemInventory(83,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'fence') {
				Player.addItemInventory(85,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'netherrack') {
				Player.addItemInventory(87,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'glowstone' || p[1] == 'glowstone_block') {
				Player.addItemInventory(89,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'cake_block') {
				Player.addItemInventory(92,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'invisible_bedrock') {
				Player.addItemInventory(95,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'trapdoor') {
				Player.addItemInventory(96,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'stone_brick' || p[1] == 'stone_bricks') {
				Player.addItemInventory(98,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'glass_pane' || p[1] == 'glass_panel') {
				Player.addItemInventory(102,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'melon_block') {
				Player.addItemInventory(103,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'melon_stem') {
				Player.addItemInventory(105,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'fence_gate') {
				Player.addItemInventory(107,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'brick_stairs' || p[1] == 'stone_brick_stairs') {
				Player.addItemInventory(109,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'nether_bricks' || p[1] == 'nether_brick_block' || p[1] == 'nether_bricks_block') {
				Player.addItemInventory(112,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'nether_brick_stairs' || p[1] == 'nether_bricks_stairs') {
				Player.addItemInventory(114,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'sandstone_stairs') {
				Player.addItemInventory(128,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'quartz_block') {
				Player.addItemInventory(155,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'quartz_stairs') {
				Player.addItemInventory(156,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'stonecutter') {
				Player.addItemInventory(245,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'glowing_obsidian') {
				Player.addItemInventory(246,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'nether_reactor') {
				Player.addItemInventory(247,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'update_block') {
				Player.addItemInventory(248,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == '.name') {
				Player.addItemInventory(255,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'iron_shovel') {
				Player.addItemInventory(256,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'iron_pickaxe') {
				Player.addItemInventory(257,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'iron_axe') {
				Player.addItemInventory(258,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'flint_steel' || p[1] == 'flint_and_steel') {
				Player.addItemInventory(259,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'apple') {
				Player.addItemInventory(260,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'bow') {
				Player.addItemInventory(261,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'arrow') {
				Player.addItemInventory(262,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'coal') {
				Player.addItemInventory(263,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'diamond') {
				Player.addItemInventory(264,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'iron_ingot') {
				Player.addItemInventory(265,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'gold_ingot') {
				Player.addItemInventory(266,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'iron_sword') {
				Player.addItemInventory(267,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'wooden_sword' || p[1] == 'wood_sword') {
				Player.addItemInventory(268,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'wooden_shovel' || p[1] == 'wood_shovel') {
				Player.addItemInventory(269,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'wooden_axe' || p[1] == 'wood_axe') {
				Player.addItemInventory(271,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'stone_sword') {
				Player.addItemInventory(272,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'stone_shovel') {
				Player.addItemInventory(273,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'stone_pickaxe') {
				Player.addItemInventory(274,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'stone_axe') {
				Player.addItemInventory(275,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'diamond_sword') {
				Player.addItemInventory(276,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'diamond_shovel') {
				Player.addItemInventory(277,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'diamond_pickaxe') {
				Player.addItemInventory(278,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'diamond_axe') {
				Player.addItemInventory(279,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'stick') {
				Player.addItemInventory(280,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'bowl') {
				Player.addItemInventory(281,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'mushroom_stew') {
				Player.addItemInventory(282,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'gold_sword' || p[1] == 'golden_sword') {
				Player.addItemInventory(283,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'gold_shovel' || p[1] == 'golden_shovel') {
				Player.addItemInventory(284,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'gold_pickaxe' || p[1] == 'golden_pickaxe') {
				Player.addItemInventory(285,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'gold_axe' || p[1] == 'golden_axe') {
				Player.addItemInventory(286,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'string') {
				Player.addItemInventory(287,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'feather') {
				Player.addItemInventory(288,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'gunpowder') {
				Player.addItemInventory(289,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'wood_hoe' || p[1] == 'wooden_hoe') {
				Player.addItemInventory(290,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'stone_hoe') {
				Player.addItemInventory(291,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'iron_hoe') {
				Player.addItemInventory(292,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'gold_hoe' || p[1] == 'golden_hoe') {
				Player.addItemInventory(294,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'seeds' || p[1] == 'wheat_seeds') {
				Player.addItemInventory(295,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'wheat') {
				Player.addItemInventory(296,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'bread') {
				Player.addItemInventory(297,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'leather_cap' || p[1] == 'leather_hat' || p[1] == 'leather_helmet') {
				Player.addItemInventory(298,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'leather_tunic' || p[1] == 'leather_chestplate') {
				Player.addItemInventory(299,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'leather_pants' || p[1] == 'leather_leggings') {
				Player.addItemInventory(300,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'leather_boots' || p[1] == 'leather_shoes') {
				Player.addItemInventory(301,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'chain_helmet' || p[1] == 'chain_hat') {
				Player.addItemInventory(302,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'chain_chestplate') {
				Player.addItemInventory(303,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'chain_pants' || p[1] == 'chain_leggings') {
				Player.addItemInventory(304,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'chain_boots' || p[1] == 'chain_shoes') {
				Player.addItemInventory(305,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'iron_helmet' || p[1] == 'iron_hat') {
				Player.addItemInventory(306,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'iron_chestplate') {
				Player.addItemInventory(307,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'iron_pants' || p[1] == 'iron_leggings') {
				Player.addItemInventory(308,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'iron_boots' || p[1] == 'iron_shoes') {
				Player.addItemInventory(309,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'diamond_helmet' || p[1] == 'diamond_hat') {
				Player.addItemInventory(310,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'diamond_chestplate') {
				Player.addItemInventory(311,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'diamond_pants' || p[1] == 'diamond_leggings') {
				Player.addItemInventory(312,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'diamond_boots' || p[1] == 'diamond_shoes') {
				Player.addItemInventory(313,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'gold_helmet' || p[1] == 'golden_helmet' || p[1] == 'gold_hat' || p[1] == 'gplden_hat') {
				Player.addItemInventory(314,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'gold_chestplate' || p[1] == 'golden_chestplate') {
				Player.addItemInventory(315,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'gold_pants' || p[1] == 'golden_pants' || p[1] == 'gold_leggings' || p[1] == 'golden_leggings') {
				Player.addItemInventory(316,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'gold_boots' || p[1] == 'golden_boots' || p[1] == 'gold_shoes' || p[1] == 'golden_shoes') {
				Player.addItemInventory(317,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'flint') {
				Player.addItemInventory(318,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'raw_porkchop') {
				Player.addItemInventory(319,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'cooked_porkchop') {
				Player.addItemInventory(320,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'painting') {
				Player.addItemInventory(321,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'sign') {
				Player.addItemInventory(323,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'wood_door' || p[1] == 'wooden_door') {
				Player.addItemInventory(324,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'bucket') {
				Player.addItemInventory(325,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'iron_door') {
				Player.addItemInventory(330,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'snowball') {
				Player.addItemInventory(332,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'leather') {
				Player.addItemInventory(334,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'brick') {
				Player.addItemInventory(336,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'clay') {
				Player.addItemInventory(337,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'sugarcane' || p[1] == 'sugar_cane' || p[1] == 'sugar_canes') {
				Player.addItemInventory(338,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'paper') {
				Player.addItemInventory(339,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'slimeball') {
				Player.addItemInventory(341,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'egg') {
				Player.addItemInventory(344,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'compass') {
				Player.addItemInventory(345,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'clock') {
				Player.addItemInventory(347,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'glowstone_dust') {
				Player.addItemInventory(348,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'dye') {
				Player.addItemInventory(351,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'bone') {
				Player.addItemInventory(352,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'sugar') {
				Player.addItemInventory(353,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'cake') {
				Player.addItemInventory(354,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'bed') {
				Player.addItemInventory(355,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'shears') {
				Player.addItemInventory(359,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'melon' || p[1] == 'melon_slice') {
				Player.addItemInventory(360,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'melon_seeds') {
				Player.addItemInventory(362,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'raw_beef') {
				Player.addItemInventory(363,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'steak' || p[1] == 'cooked_beef') {
				Player.addItemInventory(364,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'raw_chicken') {
				Player.addItemInventory(365,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'cooked_chicken') {
				Player.addItemInventory(366,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'spawn_egg') {
				Player.addItemInventory(383,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'nether_brick') {
				Player.addItemInventory(405,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'quartz' || p[1] == 'nether_quartz') {
				Player.addItemInventory(406,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] == 'camera') {
				Player.addItemInventory(456,p[2]);
				colourChat("Spawned " + p[2] + " of " + p[1] + "!");
			} if(p[1] >= 1) {
				if(p[1] == 1 || p[1] == 2 || p[1] == 3 || p[1] == 4 || p[1] == 5 || p[1] == 6 || p[1] == 7 || p[1] == 8 || p[1] == 9 || p[1] == 10 || p[1] == 11 || p[1] == 12 || p[1] == 13 || p[1] == 14 || p[1] == 15 || p[1] == 16 || p[1] == 17 || p[1] == 18 || p[1] == 20 || p[1] == 21 || p[1] == 22 || p[1] == 24 || p[1] == 26 || p[1] == 30 || p[1] == 31 || p[1] == 32 || p[1] == 35 || p[1] == 37 || p[1] == 38 || p[1] == 39 || p[1] == 40 || p[1] == 41 || p[1] == 42 || p[1] == 43 || p[1] == 44 || p[1] == 45 || p[1] == 46 || p[1] == 47 || p[1] == 48 || p[1] == 49 || p[1] == 50 || p[1] == 51 || p[1] == 53 || p[1] == 54 || p[1] == 56 || p[1] == 57 || p[1] == 58 || p[1] == 59 || p[1] == 60 || p[1] == 61 || p[1] == 62 || p[1] == 63 || p[1] == 64 || p[1] == 65 || p[1] == 67 || p[1] == 68 || p[1] == 71 || p[1] == 73 || p[1] == 74 || p[1] == 78 || p[1] == 79 || p[1] == 80 || p[1] == 81 || p[1] == 82 || p[1] == 83 || p[1] == 85 || p[1] == 87 || p[1] == 88 || p[1] == 89 || p[1] == 92 || p[1] == 95 || p[1] == 96 || p[1] == 98 || p[1] == 102 || p[1] == 103 || p[1] == 105 || p[1] == 107 || p[1] == 108 || p[1] == 109 || p[1] == 112 || p[1] == 114 || p[1] == 128 || p[1] == 155 || p[1] == 156 || p[1] == 245 || p[1] == 246 || p[1] == 247 || p[1] == 248 || p[1] == 255 || p[1] == 256 || p[1] == 257 || p[1] == 258 || p[1] == 259 || p[1] == 260 || p[1] == 261 || p[1] == 262 || p[1] == 263 || p[1] == 264 || p[1] == 265 || p[1] == 266 || p[1] == 267 || p[1] == 268 || p[1] == 269 || p[1] == 270 || p[1] == 271 || p[1] == 272 || p[1] == 273 || p[1] == 274 || p[1] == 275 || p[1] == 276 || p[1] == 277 || p[1] == 278 || p[1] == 279 || p[1] == 280 || p[1] == 281 || p[1] == 282 || p[1] == 283 || p[1] == 284 || p[1] == 285 || p[1] == 286 || p[1] == 287 || p[1] == 288 || p[1] == 289 || p[1] == 290 || p[1] == 291 || p[1] == 292 || p[1] == 293 || p[1] == 294 || p[1] == 295 || p[1] == 296 || p[1] == 297 || p[1] == 298 || p[1] == 299 || p[1] == 300 || p[1] == 301 || p[1] == 302 || p[1] == 303 || p[1] == 304 || p[1] == 305 || p[1] == 306 || p[1] == 307 || p[1] == 308 || p[1] == 309 || p[1] == 310 || p[1] == 311 || p[1] == 312 || p[1] == 313 || p[1] == 314 || p[1] == 315 || p[1] == 316 || p[1] == 317 || p[1] == 318 || p[1] == 319 || p[1] == 320 || p[1] == 321 || p[1] == 322 || p[1] == 323 || p[1] == 324 || p[1] == 325 || p[1] == 330 || p[1] == 332 || p[1] == 334 || p[1] == 336 || p[1] == 337 || p[1] == 338 || p[1] == 339 || p[1] == 341 || p[1] == 344 || p[1] == 345 || p[1] == 347 || p[1] == 348 || p[1] == 349 || p[1] == 351 || p[1] == 352 || p[1] == 353 || p[1] == 354 || p[1] == 355 || p[1] == 359 || p[1] == 360 || p[1] == 362 || p[1] == 363 || p[1] == 364 || p[1] == 365 || p[1] == 366 || p[1] == 383 || p[1] == 405 || p[1] == 406 || p[1] == 456) {
					Player.addItemInventory(parseInt(p[1]),parseInt(p[2]));
					colourChat("Spawned " + parseInt(p[2]) + " of " + parseInt(p[1]) + "!");
					break;
				} else {
					colourChat("Item/Block ID does not exist!");
				}
			}
			break;

		} case 'heal': {
			if((!p[1])) {
				Player.setHealth(20);
				colourChat("Fully healed!");
				break;
			} else {
				Player.setHealth(parseInt(p[1]));
				colourChat("Set health to " + parseInt(p[1]));
			}
			break;

		} case 'hole': {
			holeX = Math.floor(Player.getX());
			holeZ = Math.floor(Player.getZ());
			for(a=0;a<=128;a++) {
				for(b=-1;b<=1;b++) {
					for(c=-1;c<=1;c++) {
						Level.setTile(holeX+b,a,holeZ+c,0);
					}
				}
			}
			colourChat("Goodbye World");
			break;

		} case 'home': {
			if(ModPE.readData("setHomeData") == 0) {
				colourChat("No home has been set!");
				break;
			} if(ModPE.readData("setHomeData") == 1) {
				Entity.setPosition(Player.getEntity(), parseInt(ModPE.readData("homeX")) + 0.5, parseInt(ModPE.readData("homeY")) + 2, parseInt(ModPE.readData("homeZ")) + 0.5);
				colourChat("Teleported to home!");
			}
			break;

		} case 'ignite': {
			if(!p[1]) {
				Entity.setFireTicks(Player.getEntity(),5);
				colourChat("Cooking player for 5 seconds");
				break;
			} else {
				Entity.setFireTicks(Player.getEntity(),parseInt(p[1]));
				colourChat("Cooking player for " + parseInt(p[1]) + " seconds");
			}
			break;

		} case 'instabreak': {
			if(p[1] == 'on') {
				if(instabreakMode == 1) {
					colourChat("Instabreak is already on!");
					break;
				} if(instabreakMode == 0) {
					instabreakMode = 1;
					colourChat("Instabreak has been turned on!");
					Player.addItemInventory(285,1);
				}
			} if(p[1] == 'off') {
				if(instabreakMode == 0) {
					colourChat("Instabreak is already on!");
					break;
			} if(instabreakMode == 1) {
					instabreakMode = 0;
					addItemInventory(285,-1);
					colourChat("Instabreak has been turned off!");
				}
			}
			break;

		} case 'kill': {
			Player.setHealth(0);
			colourChat("You died.");
			break;

		} case 'launch': {
			if(p[1] == 'tnt') {
				if(TNTCannonActive == 0) {
					cannonCountdown = 0;
					TNTCannonActive = 1;
				}
			} if(p[1] == 'chicken') {
				cannonMob = 'mob/chicken.png';
				cannonMobID = 10;
				mobCannonActive = 1;
				cannonCountdown = 0;
			} if(p[1] == 'cow') {
				cannonMob = 'mob/cow.png';
				cannonMobID = 11;
				mobCannonActive = 1;
				cannonCountdown = 0;
			} if(p[1] == 'pig') {
				cannonMob = 'mob/pig.png';
				cannonMobID = 12;
				mobCannonActive = 1;
				cannonCountdown = 0;
			} if(p[1] == 'sheep') {
				cannonMob = 'mob/sheep.png';
				cannonMobID = 13;
				mobCannonActive = 1;
				cannonCountdown = 0;
			} if(p[1] == 'zombie') {
				cannonMob = 'mob/zombie.png';
				cannonMobID = 32;
				mobCannonActive = 1;
				cannonCountdown = 0;
			} if(p[1] == 'creeper') {
				cannonMob = 'mob/creeper.png';
				cannonMobID = 33;
				mobCannonActive = 1;
				cannonCountdown = 0;
			} if(p[1] == 'skeleton') {
				cannonMob = 'mob/skeleton.png';
				cannonMobID = 34;
				mobCannonActive = 1;
				cannonCountdown = 0;
			} if(p[1] == 'spider') {
				cannonMob = 'mob/spider.png';
				cannonMobID = 35;
				mobCannonActive = 1;
				cannonCountdown = 0;
			} if(p[1] == 'zombiepigman' || p[1] == 'zombie_pigman' || p[1] == 'pigzombie' || p[1] == 'pigman') {
				cannonMob = 'mob/pigzombie.png';
				cannonMobID = 36;
				mobCannonActive = 1;
				cannonCountdown = 0;
			} if(p[2]) {
				if(p[2] == 'rapid') {
					cannonRapidCountdown = 0;
					cannonRapidMode = 1;
					colourChat("Rapid fire...");
				}
			} if(p[1] == "stop" && cannonRapidMode == 1) {
				colourChat("Rapid fire deactivated");
				TNTCannonActive = 0;
				mobCannonActive = 0;
				cannonRapidMode = 0;
			}
			break;

		} case 'mc': {
			if(p[1] == 'on') {
				if(magicCarpet == 1) {
					colourChat("Magic carpet is already active!");
					break;
				} if(magicCarpet == 0) {
					magicCarpetTick = 0;
					magicCarpet = 1;
					colourChat("Magic carpet activated!");
				}
			} if(p[1] == 'off') {
				if(magicCarpet == 0) {
					colourChat("Magic carpet is already off!");
					break;
				} if(magicCarpet == 1) {
					magicCarpet = 0;
					colourChat("Magic carpet disappeared!");
					mcX = Math.floor(Player.getX());
					mcY = Math.floor(Player.getY())-2;
					mcZ = Math.floor(Player.getZ());
					for(j=-3;j<=3;j++) {
						for(i=-3;i<=3;i++) {
							if(j >= -2 && j <= 2) {
								if(i >= -2 && i <= 2) {
									if(Level.getTile(mcX+j,mcY,mcZ+i) == 20) {
										Level.setTile(mcX+j,mcY,mcZ+i,0);
									}
								}
							}
						}
					}
				}
			}
			break;

		} case 'nuke': {
			for(nukeX=-21;nukeX<=21;nukeX = nukeX + 3) {
				for(nukeZ=-21;nukeZ<=21;nukeZ = nukeZ + 3) {
					Level.spawnMob(Player.getX()+nukeX,Player.getY()+20,Player.getZ()+nukeZ,65);
				}
			}
			break;

		} case 'panorama': {
			if(p[1] == 'off') {
				panoramaMode = 0;
				colourChat("Panorama deactivated!");
				break;
			} if(p[1] == 'on') {
				panoramaMode = 1;
				colourChat("Panorama activated!");
				break;
			}
			break;

		} case 'pdoor': {
			if(p[1] == 'on') {
				if(portableDoorMode == 1) {
					colourChat("Portable Door mode is already on!");
				} if(portableDoorMode == 0) {
					portableDoorMode = 1;
					Player.addItemInventory(280,1);
					colourChat("Portable Door mode has been turned on!");
				}
			} if(p[1] == 'off') {
				if(portableDoorMode == 0) {
					colourChat("Portable Door mode is already off!");
				} if(portableDoorMode == 1) {
					portableDoorMode = 0;
					portableDoorSet = 0;
					Player.addItemInventory(280,-1);
					colourChat("Portable Door mode has been turned off!");
				}
			} if(p[1] == 'open') {
				if(portableDoorMode == 0) {
					colourChat("Portable Door mode is off!");
				} if(ModPE.readData("portableDoorSet") == 0) {
					colourChat("No Portable Door is set!");
				} if((portableDoorMode == 1) && (ModPE.readData("portableDoorSet") == 1) && (portableDoorActive == 0)) {
					pDoor = Level.getTile(ModPE.readData("pDoorX"),ModPE.readData("pDoorY"),ModPE.readData("pDoorZ"));
					pDoor1 = Level.getTile(ModPE.readData("pDoorX"),ModPE.readData("pDoorY1"),ModPE.readData("pDoorZ"));
					Level.setTile(ModPE.readData("pDoorX"),ModPE.readData("pDoorY"),ModPE.readData("pDoorZ"),0);
					Level.setTile(ModPE.readData("pDoorX"),ModPE.readData("pDoorY1"),ModPE.readData("pDoorZ"),0);
					colourChat("Portable Door active for 5 seconds!");
					portableDoorActive = 1;
					countdown = 100;
					countdownMode = 1;
				}
			}
			break;

		} case 'rain': {
			for(rainX=-21;rainX<=21;rainX = rainX + 3) {
				for(rainZ=-21;rainZ<=21;rainZ = rainZ + 3) {
					if(p[1] == 'chicken') {
						Level.spawnMob(Player.getX()+rainX,Player.getY()+10,Player.getZ()+rainZ,10,'mob/chicken.png');
					} if(p[1] == 'cow') {
						Level.spawnMob(Player.getX()+rainX,Player.getY()+10,Player.getZ()+rainZ,11,'mob/cow.png');
					} if(p[1] == 'pig') {
						Level.spawnMob(Player.getX()+rainX,Player.getY()+10,Player.getZ()+rainZ,12,'mob/pig.png');
					} if(p[1] == 'sheep') {
						Level.spawnMob(Player.getX()+rainX,Player.getY()+8,Player.getZ()+rainZ,13,'mob/sheep.png');
					} if(p[1] == 'zombie') {
						Level.spawnMob(Player.getX()+rainX,Player.getY()+15,Player.getZ()+rainZ,32,'mob/zombie.png');
					} if(p[1] == 'creeper') {
						Level.spawnMob(Player.getX()+rainX,Player.getY()+17,Player.getZ()+rainZ,33,'mob/creeper.png');
					} if(p[1] == 'skeleton') {
						Level.spawnMob(Player.getX()+rainX,Player.getY()+15,Player.getZ()+rainZ,34,'mob/skeleton.png');
					} if(p[1] == 'spider') {
						Level.spawnMob(Player.getX()+rainX,Player.getY()+9,Player.getZ()+rainZ,35,'mob/spider.png');
					} if(p[1] == 'zombiepigman' || p[1] == 'zombie_pigman' || p[1] == 'pigzombie' || p[1] == 'pigman') {
						Level.spawnMob(Player.getX()+rainX,Player.getY()+15,Player.getZ()+rainZ,36,'mob/pigzombie.png');
					}
				}
			}
			break;

		} case 'refresh': {
			colourChat("Refreshed all command items in your inventory!");
			if(bombMode == 1) {
				Player.addItemInventory(280,1);
			} if(portableDoorMode == 1) {
				Player.addItemInventory(280,1);
			} if(spawnTouch == 1) {
				Player.addItemInventory(295,1);
				Player.addItemInventory(296,1);
			} if(instabreakMode == 1) {
				Player.addItemInventory(285,1);
			} if(warpMode == 1) {
				Player.addItemInventory(341,1);
				Player.addItemInventory(293,1);
				Player.addItemInventory(294,1);
			}
			break;

		} case 'setitem': {
			if(p[1] > 0 && p[1] <= 510) {
				if(Level.getGameMode() == 1) {
					Entity.setCarriedItem(Player.getEntity(),p[1],1,p[2]);
					colourChat("Saved current item as " + p[1]);
				} else if(Level.getGameMode() == 0) {
					colourChat("You are in survival mode!");
				}
			}
			break;

		} case 'sethome': {
			ModPE.saveData("homeX",parseInt(Player.getX()));
			ModPE.saveData("homeY",parseInt(Player.getY()));
			ModPE.saveData("homeZ",parseInt(Player.getZ()));
			ModPE.saveData("setHomeData",1);
			colourChat("Home set to x: " + Math.floor(ModPE.readData("homeX")) + ", y: " + Math.floor(ModPE.readData("homeY")) + ", z: " + Math.floor(ModPE.readData("homeZ")));
			break;

		} case 'spawn': {
			if(p[1]) {
				spawnMobID = MobIDs[p[1].toLowerCase()];
				if(typeof(spawnMobID) == "undefined") {
					colourChat("Usage: /spawn <MobName> <Amount>");
					break;
				}
			} if(!p[1]) {
				colourChat("Usage: /spawn <MobName> <Amount>");
				break;
			} if(p[2]) {
				for(spawnAmount=0;spawnAmount<=parseInt(p[2]);spawnAmount++) {
					Level.spawnMob(getPlayerX(),getPlayerY(),getPlayerZ(),spawnMobID);
				}
			} if(!p[2]) {
				colourChat("Usage: /spawn <MobName> <Amount>");
			}
			break;

		} case 'spawntouch': {
			if(p[1] == 'off') {
				spawnTouch = 0;
				spawnMobID = null;
				colourChat("SpawnTouch deactivated!");
				break;
			} if(p[1]) {
				spawnMobID = MobIDs[p[1].toLowerCase()];
				if(typeof(spawnMobID) == "undefined") {
					colourChat("Usage: /spawntouch <MobName|off>");
				} else {
					colourChat("SpawnTouch activated!");
				}
				spawnTouch = 1;
			} if(!p[1]) {
				colourChat("Usage: /spawntouch <MobName|off>");
			}
			break;

		} case 'sprint': {
			if(p[1] == 'on') {
				if(sprintMode == 1) {
					colourChat("Sprint Mode is already active!");
					break;
				} if(sprintMode == 0) {
					sprintMode = 1;
					colourChat("Sprint Mode activated! Original Sprint Script made by WhyToFu.");
				}
			} if(p[1] == 'off') {
				if(sprintMode == 0) {
					colourChat("Sprint Mode is already off!");
					break;
				} if(sprintMode == 1) {
					sprintMode = 0;
					colourChat("Sprint Mode deactivated!");
				}
			}
			break;

		} case 'summon': {
			if(p[1] == 'chicken') {
				Level.spawnMob(Math.floor(p[2])+0.5,Math.floor(p[3])+1,Math.floor(p[4])+0.5,10,'mob/chicken.png');
				colourChat("Spawned a " + p[1] + " at " + Math.floor(p[2]) + " " + Math.floor(p[3]) + " " + Math.floor(p[4]));
			} if(p[1] == 'cow') {
				Level.spawnMob(Math.floor(p[2])+0.5,Math.floor(p[3])+1,Math.floor(p[4])+0.5,11,'mob/cow.png');
				colourChat("Spawned a " + p[1] + " at " + Math.floor(p[2]) + " " + Math.floor(p[3]) + " " + Math.floor(p[4]));
			} if(p[1] == 'pig') {
				Level.spawnMob(Math.floor(p[2])+0.5,Math.floor(p[3])+1,Math.floor(p[4])+0.5,12,'mob/pig.png');
				colourChat("Spawned a " + p[1] + " at " + Math.floor(p[2]) + " " + Math.floor(p[3]) + " " + Math.floor(p[4]));
			} if(p[1] == 'sheep') {
				Level.spawnMob(Math.floor(p[2])+0.5,Math.floor(p[3])+1,Math.floor(p[4])+0.5,13,'mob/sheep.png');
				colourChat("Spawned a " + p[1] + " at " + Math.floor(p[2]) + " " + Math.floor(p[3]) + " " + Math.floor(p[4]));
			} if(p[1] == 'zombie') {
				Level.spawnMob(Math.floor(p[2])+0.5,Math.floor(p[3])+1,Math.floor(p[4])+0.5,32,'mob/zombie.png');
				colourChat("Spawned a " + p[1] + " at " + Math.floor(p[2]) + " " + Math.floor(p[3]) + " " + Math.floor(p[4]));
			} if(p[1] == 'creeper') {
				Level.spawnMob(Math.floor(p[2])+0.5,Math.floor(p[3])+1,Math.floor(p[4])+0.5,33,'mob/creeper.png');
				colourChat("Spawned a " + p[1] + " at " + Math.floor(p[2]) + " " + Math.floor(p[3]) + " " + Math.floor(p[4]));
			} if(p[1] == 'skeleton') {
				Level.spawnMob(Math.floor(p[2])+0.5,Math.floor(p[3])+1,Math.floor(p[4])+0.5,34,'mob/skeleton.png');
				colourChat("Spawned a " + p[1] + " at " + Math.floor(p[2]) + " " + Math.floor(p[3]) + " " + Math.floor(p[4]));
			} if(p[1] == 'spider') {
				Level.spawnMob(Math.floor(p[2])+0.5,Math.floor(p[3])+1,Math.floor(p[4])+0.5,35,'mob/spider.png');
				colourChat("Spawned a " + p[1] + " at " + Math.floor(p[2]) + " " + Math.floor(p[3]) + " " + Math.floor(p[4]));
			} if(p[1] == 'zombiepigman' || p[1] == 'zombie_pigman' || p[1] == 'pigzombie' || p[1] == 'pigman') {
				Level.spawnMob(Math.floor(p[2])+0.5,Math.floor(p[3])+1,Math.floor(p[4])+0.5,36,'mob/pigzombie.png');
				colourChat("Spawned a " + p[1] + " at " + Math.floor(p[2]) + " " + Math.floor(p[3]) + " " + Math.floor(p[4]));
			} else if(!p[1]) {
				colourChat("Specify a mob!");
			}
			break;

		} case 'surface': {
			for(i=1;i<=128;i++) {
				surfaceFloor = (Math.floor(Player.getY()) - 2) + i;
				if(Level.getTile(Player.getX(),surfaceFloor,Player.getZ()) != 0 && Level.getTile(Player.getX(),surfaceFloor + 1,Player.getZ()) == 0 && Level.getTile(Player.getX(),surfaceFloor + 2,Player.getZ()) == 0) {
					Entity.setPosition(Player.getEntity(),Player.getX(),surfaceFloor + 3,Player.getZ());
				}
			} colourChat("Teleported to the surface!");
			break;

		} case 'time': {
			if(p[1] == 'set') {
				if(p[2] == 'day' || p[2] == 'daytime') {
					Level.setTime(0);
					colourChat("Time set to day!");
					break;
				} if(p[2] == 'sunset') {
					Level.setTime(7200);
					colourChat("Time set to sunset!");
					break;
				} if(p[2] == 'night') {
					Level.setTime(8280);
					colourChat("Time set to night!");
					break;
				} if(p[2] == 'sunrise') {
					Level.setTime(13320);
					colourChat("Time set to sunrise!");
					break;
				} if(!p[2]) {
					colourChat("Specify a time!");
					break;
				} else {
					Level.setTime(parseInt(p[2]));
					colourChat("Time set to " + parseInt(p[2]));
					break; 
				}
			} if(!p[1]) {
				colourChat("The current time is " + Level.getTime());
			}
			break;

		} case 'tp': {
			Entity.setPosition(Player.getEntity(), parseInt(p[1]), parseInt(p[2]), parseInt(p[3]));
			colourChat("Teleported to x: " + parseInt(p[1]) + ", y: " + parseInt(p[2]) + ", z: " + parseInt(p[3]));
			break;

		} case 'warp': {
			if(p[1] == 'on') {
				if(warpMode == 1) {
					colourChat("Warp Mode is already on!");
					break;
				} if(warpMode == 0) {
					warpMode = 1;
					Player.addItemInventory(341,1);
					Player.addItemInventory(293,1);
					Player.addItemInventory(294,1);
					Player.addItemInventory(57,2);
					Player.addItemInventory(41,2);
					Player.addItemInventory(42,2);
					Player.addItemInventory(22,2);
					colourChat("Warp Panels activated!");
				}
			} if(p[1] == 'off') {
				if(warpMode == 0) {
					colourChat("Warp mode is already off!");
					break;
				} if(warpMode == 1) {
					warpMode = 0;
					Player.addItemInventory(341,-1);
					Player.addItemInventory(293,-1);
					Player.addItemInventory(294,-1);
					colourChat("Warp Panels deactivated!");
				}
			}
			break;
		} default: {
			colourChat("Command does not exist!");
			break;
		}
	}
}

function colourChat(msg) {
	try {
		clientMessage(ChatColor.BLUE + "[SPC] " + ChatColor.WHITE + msg);
	} catch(err) {
		clientMessage("[SPC] " + msg);
	}
}

function entityAddedHook(entity) {
	entities.push(entity);
	if(snowballThrown == 0 && pearlActive == 1) {
		if(Entity.getEntityTypeId(entity) == 81) {
			snowball = entity;
			countdown = 0;
			snowballThrown = 1;
		}
	}
}

function entityRemovedHook(entity) {
	entities.splice(entities.indexOf(entity));
	if(Entity.getEntityTypeId(entity) == 81 && pearlActive == 1) {
		snowball = entity;
		snowballThrown = 0;
		if(snowballX >= 0 && snowballX <= 255 && snowballZ >= 0 && snowballZ <= 255) {
			Entity.setPosition(Player.getEntity(),snowballX+0.5,snowballY+2,snowballZ+0.5);
		}
	}
}

function modTick() {
	if(magicCarpet == 1) {
		magicCarpetTick++;
		if(magicCarpetTick == 2) {
			mcX = Math.floor(Player.getX());
			mcY = Math.floor(Player.getY()) - 2;
			mcZ = Math.floor(Player.getZ());
			for(j=-3;j<=3;j++) {
				for(i=-3;i<=3;i++) {
					for(k=-1;k<=1;k++) {
						if(j >= -2 && j <= 2) {
							if(i >= -2 && i <= 2) {
								if(Level.getTile(mcX+j,mcY,mcZ+i) == 0) {
									Level.setTile(mcX+j,mcY,mcZ+i,20);
								}
							}
						} if(j == -3 || j == 3) {
							if(i >= -3 && i <= 3) {
								if(Level.getTile(mcX+j,mcY,mcZ+i) == 20) {
									Level.setTile(mcX+j,mcY,mcZ+i,0);
								}
							}
						} if(j >= -3 && j <= 3) {
							if(i == -3 || i == 3) {
								if(Level.getTile(mcX+j,mcY,mcZ+i) == 20) {
									Level.setTile(mcX+j,mcY,mcZ+i,0);
								}
							}
						} if(k == -1 || k == 1) {
							if(j >= -3 && j <= 3) {
								if(i >= -3 && i <= 3) {
									if(Level.getTile(mcX+j,mcY+k,mcZ+i) == 20) {
										Level.setTile(mcX+j,mcY+k,mcZ+i,0);
									}
								}
							}
						} if(Entity.getPitch(Player.getEntity()) >= 75) {
							if(j >= -2 && j <= 2) {
								if(i >= -2 && i <= 2) {
									if(Level.getTile(mcX+j,mcY,mcZ+i) == 20) {
										Level.setTile(mcX+j,mcY,mcZ+i,0);
									}
								}
							} if(k == -1) {
								if(j >= -2 && j <= 2) {
									if(i >= -2 && i <= 2) {
										if(Level.getTile(mcX+j,mcY+k,mcZ+i) == 0) {
											Level.setTile(mcX+j,mcY+k,mcZ+i,20);
										}
									}
								}
							}
						}
					}
				}
			}
			magicCarpetTick = 0;
		}
	}

	if(sprintMode == 1) {
		if(sprintTick == 1) {
			Xpos = Player.getX();
			Zpos = Player.getZ();
			sprintTick++;
		} if(sprintTick == 3) {
			sprintTick = 1;
			Xdiff = Player.getX() - Xpos;
			Zdiff = Player.getZ() - Zpos;
			Entity.setVelX(Player.getEntity(),Xdiff);
			Entity.setVelZ(Player.getEntity(),Zdiff);
			Xdiff = 0;
			Zdiff = 0;
		} if(sprintTick != 1) {
			sprintTick++;
		}
	}

	if((portableDoorMode == 1) && (ModPE.readData("portableDoorSet") == 1) && (portableDoorActive == 1)) {
		if(countdownMode == 1) {
			if(countdown != 0) {
				countdown--;
			} if(countdown == 0) {
				Level.setTile(ModPE.readData("pDoorX"),ModPE.readData("pDoorY"),ModPE.readData("pDoorZ"),pDoor);
				Level.setTile(ModPE.readData("pDoorX"),ModPE.readData("pDoorY1"),ModPE.readData("pDoorZ"),pDoor1);
				colourChat("Portable Door closed!");
				portableDoorActive = 0;
				countdownMode = 100;
			}
		}
	}

	if(panoramaMode == 1) {
		panCountdown++;
		if(panCountdown == 1) {
			nextYaw = Entity.getYaw(Player.getEntity());
			Entity.setRot(Player.getEntity(),nextYaw + 0.33,Entity.getPitch(Player.getEntity()));
			if(nextYaw >= 360) {
				Entity.setRot(Player.getEntity(),0,Entity.getPitch(Player.getEntity()));
			} if(nextYaw < 0) {
				Entity.setRot(Player.getEntity(),359,Entity.getPitch(Player.getEntity()));
			}
			panCountdown = 0;
		}
	}

	if(TNTCannonActive == 1 || mobCannonActive == 1) {
		cannonCountdown++;
		if(cannonCountdown == 1) {
			colourChat("3");
		} if(cannonCountdown == 20) {
			colourChat("2");
		} if(cannonCountdown == 40) {
			colourChat("1");
		} if(cannonCountdown >= 60) {
			cannonPlayerYaw = Entity.getYaw(Player.getEntity());
			cannonPlayerPitch = Entity.getPitch(Player.getEntity());
			cannonVelY = Math.sin((cannonPlayerPitch - 180) / 180 * Math.PI);
			cannonVelX = Math.sin(cannonPlayerYaw / 180 * Math.PI) * Math.cos((cannonPlayerPitch - 180) / 180 * Math.PI);
			cannonVelZ = -1 * Math.cos(cannonPlayerYaw / 180 * Math.PI) * Math.cos((cannonPlayerPitch - 180) / 180 * Math.PI);
			if(cannonRapidMode == 0) {
				if(TNTCannonActive == 1) {
					launchEntity = Level.spawnMob(Player.getX(),Player.getY(),Player.getZ(),65);
				} else if(mobCannonActive == 1) {
					launchEntity = Level.spawnMob(Player.getX(),Player.getY(),Player.getZ(),cannonMobID,cannonMob);
				}
				setVelX(launchEntity,cannonVelX);
				setVelY(launchEntity,cannonVelY);
				setVelZ(launchEntity,cannonVelZ);
				colourChat("Launched!");
				TNTCannonActive = 0;
				mobCannonActive = 0;
			} if(cannonRapidMode == 1) {
				cannonRapidCountdown++;
				if(cannonRapidCountdown == 5) {
					if(TNTCannonActive == 1) {
						launchEntity = Level.spawnMob(Player.getX(),Player.getY(),Player.getZ(),65);
					} else if(mobCannonActive == 1) {
						launchEntity = Level.spawnMob(Player.getX(),Player.getY(),Player.getZ(),cannonMobID,cannonMob);
					}
					setVelX(launchEntity,cannonVelX);
					setVelY(launchEntity,cannonVelY);
					setVelZ(launchEntity,cannonVelZ);
					cannonRapidCountdown = 0;
				}
			}
		}
	}

	if(snowballThrown == 1) {
		pearlCountdown++;
		if(pearlCountdown == 1) {
			snowballX = Math.floor(Entity.getX(snowball));
			snowballY = Math.floor(Entity.getY(snowball));
			snowballZ = Math.floor(Entity.getZ(snowball));
			pearlCountdown = 0;
		}
	}
}