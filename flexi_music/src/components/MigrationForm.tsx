/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from './ui/input'; // Adjust the import path as necessary
import { Button } from './ui/button'; // Adjust the import path as necessary
import './MigrationForm.css'; // Assuming you have a separate CSS file for the form

interface FormValues {
  sourcePlaylistUrl: string;
  destinationPlatform: string;
}

interface MigrationFormProps {
  onMigrate: SubmitHandler<FormValues>;
}

export const MigrationForm: React.FC<MigrationFormProps> = ({ onMigrate }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = data => {
    onMigrate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="migration-form">
      <div className="form-group">
        <label htmlFor="sourcePlaylistUrl" className="form-label">Source Playlist URL</label>
        <Input id="sourcePlaylistUrl" {...register("sourcePlaylistUrl", { required: true })} placeholder="Enter the source playlist URL" className="form-input" />
        {errors.sourcePlaylistUrl && <span className="form-error">This field is required</span>}
      </div>
      
      <div className="form-group">
        <label htmlFor="destinationPlatform" className="form-label">Destination Platform</label>
        <select id="destinationPlatform" {...register("destinationPlatform", { required: true })} className="form-select">
          <option value="">Select Platform</option>
          <option value="spotify">Spotify</option>
          <option value="youtubeMusic">YouTube Music</option>
          <option value="applemusic">Apple Music</option>
          {/* Add more platforms as options here */}
        </select>
        {errors.destinationPlatform && <span className="form-error">This field is required</span>}
      </div>

      <Button type="submit" className="submit-button">Migrate Playlist</Button>
    </form>
  );
};

export default MigrationForm;
