import {
  CpuChipIcon,
  Squares2X2Icon,
  BookOpenIcon,
  ServerIcon,
  QueueListIcon,
  BoltIcon,
  PlayIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  CircleStackIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  return (
    <div className="w-[260px] bg-white border-r border-gray-200 flex flex-col px-3 py-4">

      {/* 🔹 SECTION: MY PROJECTS */}
      <Section title="MY PROJECTS">
        <MenuItem icon={<CpuChipIcon className="w-5" />} text="Agents" />
        <MenuItem icon={<Squares2X2Icon className="w-5" />} text="AI Models" />
        <MenuItem icon={<BookOpenIcon className="w-5" />} text="Library" />
      </Section>

      {/* 🔹 SECTION: ORCHESTRATOR */}
      <Section title="ORCHESTRATOR">
        <MenuItem icon={<ServerIcon className="w-5" />} text="Published" />
        <MenuItem icon={<ServerIcon className="w-5" />} text="Machines" />
        <MenuItem icon={<QueueListIcon className="w-5" />} text="Queues" />
        <MenuItem icon={<BoltIcon className="w-5" />} text="Triggers" />
        <MenuItem icon={<PlayIcon className="w-5" />} text="Jobs" />
        <MenuItem icon={<DocumentTextIcon className="w-5" />} text="Executions" />
        <MenuItem icon={<ShieldCheckIcon className="w-5" />} text="Vault" />

        {/* ✅ ACTIVE */}
        <MenuItem
          icon={<BookOpenIcon className="w-5" />}
          text="Knowledge Base"
          active
        />

        <MenuItem icon={<CircleStackIcon className="w-5" />} text="Key Store" />
      </Section>

      {/* 🔹 SECTION: ADMIN */}
      <Section title="ADMIN">
        <MenuItem icon={<Squares2X2Icon className="w-5" />} text="Tenant" />
        <MenuItem icon={<Squares2X2Icon className="w-5" />} text="Integrations" />
      </Section>

    </div>
  );
};


const Section = ({ title, children }) => {
  return (
    <div className="mb-6">

      <p className="text-[11px] font-semibold text-gray-400 tracking-wider  mb-2">
        {title}
      </p>

      <div className="space-y-1">
        {children}
      </div>

    </div>
  );
};



const MenuItem = ({ icon, text, active }) => {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer text-[14px] transition
      ${
          active
            ? "bg-[#4F46E5] text-white"
            : "text-[#6B7280] hover:bg-gray-100"
        }
      `}
    >
      <div className="w-5 h-5 flex items-center justify-center">
        {icon}
      </div>

      <span>{text}</span>
    </div>
  );
};

export default Sidebar;