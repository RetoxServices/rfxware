import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  sectionTitleAnimation, 
  staggerContainer, 
  socialCardAnimation 
} from "@/lib/framer-animations";

interface DiscordContact {
  id: number;
  name: string;
  role: string;
  handle: string;
  avatar: string;
}

interface DiscordServer {
  id: number;
  name: string;
  description: string;
  members: number;
  link: string;
  icon: string;
}

const discordContacts: DiscordContact[] = [
  {
    id: 1,
    name: "Alex",
    role: "Project Lead",
    handle: "alex#1234",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    id: 2,
    name: "Sam",
    role: "Developer",
    handle: "sam#5678",
    avatar: "https://i.pravatar.cc/150?img=2"
  },
  {
    id: 3,
    name: "Jordan",
    role: "Designer",
    handle: "jordan#9012",
    avatar: "https://i.pravatar.cc/150?img=3"
  },
  {
    id: 4,
    name: "Morgan",
    role: "Community Manager",
    handle: "morgan#3456",
    avatar: "https://i.pravatar.cc/150?img=4"
  }
];

const discordServers: DiscordServer[] = [
  {
    id: 1,
    name: "DevPortal Official",
    description: "Main community server for DevPortal projects and updates",
    members: 1420,
    link: "https://discord.gg/example",
    icon: "fas fa-code"
  },
  {
    id: 2,
    name: "GameDev Nexus",
    description: "For our game development projects and discussions",
    members: 826,
    link: "https://discord.gg/gamedev-example",
    icon: "fas fa-gamepad"
  }
];

const ContactCard = ({ contact }: { contact: DiscordContact }) => {
  return (
    <motion.div 
      className="bg-gray-900 rounded-lg p-4 border border-gray-800 hover:border-primary/30 transition-all flex items-center"
      variants={socialCardAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover="hover"
    >
      <img 
        src={contact.avatar} 
        alt={contact.name} 
        className="w-12 h-12 rounded-full border-2 border-primary/50"
      />
      <div className="ml-4">
        <h3 className="text-lg font-medium text-white">{contact.name}</h3>
        <p className="text-gray-400 text-sm">{contact.role}</p>
        <p className="text-primary text-sm mt-1 flex items-center">
          <i className="fab fa-discord mr-1"></i> {contact.handle}
        </p>
      </div>
    </motion.div>
  );
};

const ServerCard = ({ server }: { server: DiscordServer }) => {
  return (
    <motion.div 
      className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-primary/50"
      variants={socialCardAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover="hover"
    >
      <div className="flex items-center mb-4">
        <div className="h-14 w-14 flex items-center justify-center bg-primary/20 rounded-lg text-primary">
          <i className={`${server.icon} text-2xl`}></i>
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-bold text-white">{server.name}</h3>
          <p className="text-gray-400 text-sm">{server.members.toLocaleString()} members</p>
        </div>
      </div>
      <p className="text-gray-300 mb-4">{server.description}</p>
      <a 
        href={server.link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-flex items-center justify-center w-full py-3 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors"
      >
        <i className="fab fa-discord mr-2"></i> Join Server
      </a>
    </motion.div>
  );
};

const DiscordSection = () => {
  return (
    <section id="discord" className="py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionTitleAnimation}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Join Our <span className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">Discord</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            Connect with our team and community through Discord.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Our Servers</h3>
              <motion.div 
                className="grid md:grid-cols-2 gap-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {discordServers.map(server => (
                  <ServerCard key={server.id} server={server} />
                ))}
              </motion.div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-6">Team Contacts</h3>
            <motion.div 
              className="grid gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {discordContacts.map(contact => (
                <ContactCard key={contact.id} contact={contact} />
              ))}
            </motion.div>
            
            <motion.div 
              className="mt-8 p-6 bg-primary/10 rounded-lg border border-primary/20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <h4 className="text-lg font-bold text-white flex items-center">
                <i className="fas fa-info-circle mr-2 text-primary"></i> Discord Tip
              </h4>
              <p className="text-gray-300 mt-2">
                When joining our servers, be sure to check out the #roles channel to get access to specific project discussion areas.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscordSection;
