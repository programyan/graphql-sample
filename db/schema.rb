Sequel.migration do
  change do
    create_table(:schema_migrations) do
      column :filename, "text", :null=>false
      
      primary_key [:filename]
    end
    
    create_table(:users) do
      column :id, "uuid", :null=>false
      column :email, "text", :null=>false
      
      primary_key [:id]
    end
    
    create_table(:requests) do
      column :id, "uuid", :null=>false
      foreign_key :user_id, :users, :type=>"uuid", :null=>false, :key=>[:id]
      column :description, "text", :null=>false
      column :details, "text"
      column :paused, "boolean", :default=>false, :null=>false
      
      primary_key [:id]
    end
  end
end
Sequel.migration do
  change do
    self << "SET search_path TO \"$user\", public"
    self << "INSERT INTO \"schema_migrations\" (\"filename\") VALUES ('20190920100646_schema.rb')"
  end
end
