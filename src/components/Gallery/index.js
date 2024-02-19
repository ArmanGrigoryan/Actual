import withGalleryActions from "comp/HOC/withGalleryActions";
import TheVoiceOfHRTwo from "./TheVoiceOfHRTwo";
import TheVoiceOfHR from "./TheVoiceOfHR";
import Master from "./Master";
import MasterTwo from "./MasterTwo";
import HRManagement from "./HRManagement";
import Archive from "./Archive";

export const TheVoiceOfHRTwoGallery = withGalleryActions(TheVoiceOfHRTwo);
export const TheVoiceOfHRGallery = withGalleryActions(TheVoiceOfHR);
export const MasterGallery = withGalleryActions(Master);
export const MasterTwoGallery = withGalleryActions(MasterTwo);
export const HRManagementGallery = withGalleryActions(HRManagement);
export const ArchiveGallery = withGalleryActions(Archive);